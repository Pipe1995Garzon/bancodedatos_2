const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestionDeCalidad = require('../controllers/gestion_calidad');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestioncalidad',isLoggedIn, gestionDeCalidad.GestionCalidad);

module.exports = router;