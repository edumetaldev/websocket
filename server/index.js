import express from "express"
import logger from 'morgan'
import mysql from 'mysql2/promise'

import { Server } from "socket.io";
import { createServer } from 'node:http'

import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT ?? 3003

const app = express()
const server = createServer(app)
const io = new Server(server, {
    connectionStateRecovery: {}
})

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database")
})

connection.execute('CREATE TABLE IF NOT EXISTS messages (id INT PRIMARY KEY AUTO_INCREMENT, content TEXT, user varchar(25));')

io.on('connection', async (socket) => {
    console.log('a user has connected!')

    socket.on('disconnect', () => {
        console.log('an user has disconnected')
    })

    socket.on('chat message', async (msg) => {
        const username = socket.handshake.auth.username ?? 'anonymous'        

        let result
        try {
            result = await connection.query(
                `INSERT INTO messages (content,user) VALUES (?,?)`,
                [msg, username]
            )
        } catch (e) {
            console.error(e)
            return
        }

        io.emit('chat message', msg, result.insertId, username)
    })


    if (!socket.recovered) {
        console.log(socket.handshake.auth)
        try {
            const [results] = await connection.execute(
                'SELECT id, content, user FROM messages WHERE id > ?',
                [socket.handshake.auth.serverOffset ?? 0]
            )
            // console.table(results)
            results.forEach(row => {
                socket.emit('chat message', row.content, row.id, row.user)
            })

        } catch (e) {
            console.error(e)
        }
    }
})


app.use(logger('dev'))

app.get('/', (req, res) => {
    // res.send('<h1>esto es el chat</h1>')
    res.sendFile(process.cwd() + '/client/index.html')
})

app.get('/opa', (req, res) => {
    res.send('<h1>esto es el OPA</h1>')
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})