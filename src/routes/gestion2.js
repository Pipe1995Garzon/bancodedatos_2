const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestion2 = require('../controllers/gestion2');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestion2',isLoggedIn, gestion2.Gestion2);

module.exports = router;