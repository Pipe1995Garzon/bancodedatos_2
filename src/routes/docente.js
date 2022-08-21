const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../lib/auth');
const { isnotLoggedIn } = require('../lib/auth');
const { route } = require('./authentication');
const GenerarPdf = require('../controllers/docente');
const mimeTypes = require('mime-types');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: 'src/public/archivos',
    filename: function(req, file, cb) {
        cb("", Date.now() + file.originalname + "." + mimeTypes.extension(file.mimetype))
    }
})

const upload = multer({ storage: storage })

//docentes
//router.get('/generarparrafo', isLoggedIn, GenerarPdf.GenerarParrafo);
router.get('/gestionar_docente', isLoggedIn, GenerarPdf.listTeacherController);
router.post('/modificar_docentes/:id', isLoggedIn, GenerarPdf.ModificarDocenteController);
router.get('/eliminar_docentes/:id', isLoggedIn, GenerarPdf.EliminarDocenteController);
router.get('/generarcertificadosencillo',isLoggedIn,GenerarPdf.generarCertificadoSencillo);
router.get('/generarcertificadocompleto',isLoggedIn,GenerarPdf.generarCertificadoCompleto);
router.get('/talentohumano',isLoggedIn,GenerarPdf.TalentoHumano);
router.get('/gestionar_archivos',isLoggedIn,GenerarPdf.IraSubirArchivos);
router.post('/gestionar_archivos',isLoggedIn,upload.single('file'),GenerarPdf.IraSubirArchivosPost);
router.get('/descargar/:id', function(req, res) {
    res.download(__dirname + '../../public/archivos/' + req.params.id, req.params.id);
});



module.exports = router;