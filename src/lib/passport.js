const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');


//INICIA VALIDACION DEL LOGEO
passport.use('local.login', new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, usuario, password, done) => {
    const filas = await pool.query('SELECT * FROM usuarios WHERE usuario=?', [usuario]);
    console.log(req.body)
    if (filas.length > 0) {
        const user = filas[0]
        const passvalida = await helpers.compararclave(password, user.password);
        console.log(passvalida)
            //console.log(user.pass)
        if (passvalida) {
            done(null, user, req.flash('success', 'bienvenido  ' + user.usuario))
        } else {
            done(null, false, req.flash('message', 'usuario o clave incorrecta '))
        }
    } else {
        return done(null, false, req.flash('message', 'el usuario no existe'))
    }
}));

//FIN VALIDACION LOGEO

//INICIA EL REGISTRO DE USUARIO
//local.ingresar es el nombre de la funcion para registrar un usuario que pueda autenticarse
passport.use('local.registrar', new LocalStrategy({
    usernameField: 'usuario',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, usuario, password, done) => {
    //const { nombres, edad, identificacion, telefono, rol_id } = req.body
    const { id_rol, CC } = req.body;
    const validarexistencia = await pool.query('SELECT * FROM docentes where CC=?', [CC]);
    if (validarexistencia.length == 1) {
        const validar = await pool.query('SELECT * FROM usuarios WHERE usuario=?', [usuario]);
        if (validar.length > 0) {
            return done(null, false, req.flash('message', 'el usuario ya existe'));
        } else {
            // console.log(req.body)
            const NuevoUsuario = {
                usuario,
                password,
                CC,
                id_rol
            }
            NuevoUsuario.password = await helpers.encriptar(password);
            const result = await pool.query('insert into usuarios set ?', [NuevoUsuario])
            NuevoUsuario.id = result.insertId;
            await pool.query('update docentes set id_usuario=? WHERE CC=?', [NuevoUsuario.id, CC])
            console.log('registro exitoso')
            return done(null, NuevoUsuario)
        }
    } else {
        return done(null, false, req.flash('message', 'el usuario no existe en la base de datos. consulte al administrador'))
    }
}));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id_usuario, username: user.usuario, rol: user.id_rol, cc: user.CC });
    });
});
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});