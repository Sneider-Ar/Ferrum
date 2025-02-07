const express = require('express');
const cors = require('cors');
const db = require('./db.js'); 
require('dotenv').config();
 // Importamos la conexión a MySQL

const server= express();


// Middlewares
server.use(cors());
server.use(express.json());

// Importar rutas de usuarios
const Routes = require('./routes/index.js');
server.use('/', Routes);

module.exports = server;