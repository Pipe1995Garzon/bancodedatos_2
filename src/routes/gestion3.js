const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestion3 = require('../controllers/gestion3');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestion3',isLoggedIn, gestion3.Gestion3);

module.exports = router;