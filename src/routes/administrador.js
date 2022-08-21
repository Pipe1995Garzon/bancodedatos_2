const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../lib/auth');
const { isnotLoggedIn } = require('../lib/auth');
const { route } = require('./authentication');
const allAboutAdmin = require('../controllers/admin');

//en este espacio se va a programar todo la funcinalidad del administrador
//ir a formulario agregar docente
router.get('/add_teacher', isLoggedIn, allAboutAdmin.AddTeacher);
//agregar docente post
router.post('/add_teacher', isLoggedIn, allAboutAdmin.AddTeacherPost);
//eliminar docente
router.get('/eliminar_usuario/:id', isLoggedIn, allAboutAdmin.EliminarUsuariosModel);
//Menu  para gestionar la gestion fet
router.get('/gestionar_pagina', isLoggedIn, allAboutAdmin.MenuGestionarPagina);
//crud de configuracion nivel academico
router.get('/agregarNivelAcademico', isLoggedIn, allAboutAdmin.AgregarNivelAcademico);
//agregar nivel academico
router.post('/agregarNivelAcademicoPost', isLoggedIn, allAboutAdmin.AgregarNivelAcademicoPost);
//modificar nivel academico
router.post('/modificarnivelacademicoPost/:id', isLoggedIn, allAboutAdmin.ModificarNivelAcademico);
//eliminar nivel academico
router.get('/eliminarnivelacademico/:id', isLoggedIn, allAboutAdmin.EliminarNivelAcademico);

//ir a formulario de configuracion nivel academico programa
router.get('/agregarprograma', isLoggedIn, allAboutAdmin.AgregarProgramaAcademico);
//agregar programa post
router.post('/agregarprograma', isLoggedIn, allAboutAdmin.AgregarProgramaPost);
//modificar programa
router.post('/modificarprograma/:id', isLoggedIn, allAboutAdmin.ModificarPrograma);
//eliminar programa
router.get('/eliminarprogramaacademico/:id', isLoggedIn, allAboutAdmin.EliminarProgramaAcademico);

//Formulario de configuracion tipo de contrato

module.exports = router;