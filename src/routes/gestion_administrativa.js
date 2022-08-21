const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestionAdministrativa = require('../controllers/gestion_administrativa');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestionadministrativa',isLoggedIn, gestionAdministrativa.GestionAdministrativa);

module.exports = router;