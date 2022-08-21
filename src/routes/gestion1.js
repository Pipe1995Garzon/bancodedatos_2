const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestion1 = require('../controllers/gestion1');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestion1',isLoggedIn, gestion1.Gestion1);

module.exports = router;