const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestion = require('../controllers/gestion');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestion',isLoggedIn, gestion.Gestion);

module.exports = router;