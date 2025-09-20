# 🔥 Proyecto WebSocket - Chat en Tiempo Real

Este es un proyecto de práctica para aprender y entender el funcionamiento de **WebSockets** implementando un chat en tiempo real con persistencia de datos.

## 📋 Descripción

El proyecto consiste en una aplicación de chat que permite a múltiples usuarios comunicarse en tiempo real utilizando WebSockets. Los mensajes se almacenan en una base de datos MySQL para persistencia y se recuperan automáticamente cuando un usuario se conecta.

### Características principales:
- ✅ Chat en tiempo real con WebSockets
- ✅ Persistencia de mensajes en MySQL
- ✅ Recuperación automática de mensajes perdidos
- ✅ Generación automática de nombres de usuario
- ✅ Interfaz responsive y moderna
- ✅ Reconexión automática

## 🛠️ Tecnologías Utilizadas

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web para Node.js
- **Socket.IO** - Biblioteca para WebSockets
- **MySQL2** - Driver para conexión con MySQL
- **Morgan** - Middleware de logging HTTP
- **dotenv** - Gestión de variables de entorno

### Frontend
- **HTML5** - Estructura de la página
- **CSS3** - Estilos y diseño responsive
- **JavaScript ES6+** - Lógica del cliente
- **Socket.IO Client** - Cliente WebSocket

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- MySQL (versión 8.0 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd websocket
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3003
   DB_HOST=localhost
   DB_USER=tu_usuario_mysql
   DB_PASSWORD=tu_contraseña_mysql
   DB_DATABASE=websocket_chat
   ```

4. **Configurar la base de datos**
   
   Crear la base de datos en MySQL:
   ```sql
   CREATE DATABASE websocket_chat;
   ```
   
   La tabla `messages` se creará automáticamente al ejecutar el servidor.

## 🚀 Ejecución

### Desarrollo
```bash
npm run dev
```

Este comando ejecuta el servidor con `--watch` para reinicio automático cuando hay cambios.

### Producción
```bash
node ./server/index.js
```

## 📱 Uso

1. **Iniciar el servidor** con `npm run dev`
2. **Abrir el navegador** y navegar a `http://localhost:3003`
3. **El sistema generará automáticamente** un nombre de usuario aleatorio
4. **Escribir mensajes** en el campo de texto y presionar "Enviar"
5. **Los mensajes aparecerán en tiempo real** para todos los usuarios conectados

## 🏗️ Estructura del Proyecto

```
websocket/
├── client/
│   └── index.html          # Interfaz del cliente
├── server/
│   └── index.js           # Servidor Express + Socket.IO
├── package.json           # Dependencias y scripts
├── .env                   # Variables de entorno (crear)
└── README.md             # Este archivo
```

## 🔧 Configuración Avanzada

### Variables de Entorno Disponibles

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| `PORT` | Puerto del servidor | `3003` |
| `DB_HOST` | Host de MySQL | `localhost` |
| `DB_USER` | Usuario de MySQL | - |
| `DB_PASSWORD` | Contraseña de MySQL | - |
| `DB_DATABASE` | Nombre de la base de datos | - |

### Personalización

- **Cambiar puerto**: Modificar `PORT` en `.env`
- **Cambiar tema**: Editar los estilos CSS en `client/index.html`
- **Agregar autenticación**: Implementar middleware de autenticación en Express

## 🐛 Solución de Problemas

### Error de conexión a MySQL
- Verificar que MySQL esté ejecutándose
- Comprobar las credenciales en `.env`
- Asegurar que la base de datos existe

### Puerto ocupado
- Cambiar el puerto en `.env`
- Verificar que no hay otros servicios usando el puerto 3003

### Mensajes no aparecen
- Verificar la conexión a la base de datos
- Comprobar la consola del navegador para errores
- Revisar los logs del servidor

## 📚 Conceptos de WebSocket Aprendidos

- **Conexión bidireccional** entre cliente y servidor
- **Eventos en tiempo real** con Socket.IO
- **Persistencia de datos** con MySQL
- **Recuperación de mensajes** perdidos
- **Autenticación básica** con tokens
- **Manejo de desconexiones** y reconexiones

## 🤝 Contribuciones

Este es un proyecto de aprendizaje, pero las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `package.json` para más detalles.

## 👨‍💻 Autor

Proyecto creado como práctica de aprendizaje de WebSockets.

---

**Nota**: Este proyecto es únicamente para fines educativos y de práctica. No está diseñado para uso en producción sin las debidas consideraciones de seguridad y escalabilidad.
