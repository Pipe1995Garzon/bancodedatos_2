const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestionEstudiantil = require('../controllers/gestion_estudiantil');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestionestudiantil',isLoggedIn, gestionEstudiantil.GestionEstudiantil);

module.exports = router;