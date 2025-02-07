const { Router } = require('express');
const users = require('./users');

const router = Router();

//router.use('/videogames',Videogame)

router.use('/users', users)

//router.get('/', (req, res) => {
//    res.send('Servidor funcionando 🚀');
//});

module.exports = router;