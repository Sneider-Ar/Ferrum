const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db.js'); // Importamos la conexión a MySQL

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

// Importar rutas de usuarios
const userRoutes = require('./src/routes/users');
app.use('/users', userRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
