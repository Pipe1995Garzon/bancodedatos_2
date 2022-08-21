const express = require('express');
const router = express.Router();
const passport = require('passport');
const isAdminorTeaccher = require('../controllers/users');
const { isLoggedIn } = require('../lib/auth');
const { isnotLoggedIn } = require('../lib/auth');
const pool = require('../database');

//empieza modulo gestion talento humana
//resgitrarse get

router.get('/signup', (req, res) => {
    
    res.render('auth/signup');
});

//resgitrarse post
router.post('/signup', passport.authenticate('local.registrar', {
    successRedirect: '/menu_modulos',
    failureRedirect: '/signup',
    failureFlash: true
}));

//ingresar get modulo gestion humana
router.get('/signingestionhumana', isnotLoggedIn, (req, res) => {
    res.render('auth/signin');
})

//ingresar post gestion humana
router.post('/signin', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/menu_modulos',
        failureRedirect: '/signingestionhumana',
        failureFlash: true
    })(req, res, next)
})

//perfil admin o docente modulo gestion humane
router.get('/user_profile', isLoggedIn, isAdminorTeaccher.teacherORAdminController);

//cerrar sesion modulo gestion humana
router.get('/logout', isLoggedIn, (req, res) => {
    req.logOut();
    res.redirect('/signingestionhumana')
});


//fin modulo gestion talento humano humana

//ruta escoger modulos.
router.get('/menu_modulos', isLoggedIn, (req, res) => {
    res.render('auth/menu_modulos');
});

//empieza modulo gestion de calidad

//ingresar get modulo gestion calidad
router.get('/signin_gestioncalidad', isnotLoggedIn, (req, res) => {
    res.render('auth/signingestioncalidad');
})
module.exports = router;