const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const gestionRecursosfisicos = require('../controllers/gestion_fisicos');

//en este espacio se va a programar todo la funcinalidad del administrador

router.get('/gestionrecursosfisicos',isLoggedIn, gestionRecursosfisicos.gestionRecursosFisicos);

module.exports = router;