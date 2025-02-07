const express = require('express');
const router = express.Router();
const db = require('../../db.js');

// Ruta para obtener todos los usuarios
router.get('/', (req, res) => {
  db.query('SELECT * FROM prueba', (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
    res.json(results);
  });
});

module.exports = router;
