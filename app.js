//carga variables de entorno
require('dotenv').config();

// Carga clase server
const Server = require('./models/server');
const server = new Server();

server.listen();