const adminModel = require('../models/admin');
const conversor = require('conversor-numero-a-letras-es-ar');
const nodemailer = require('nodemailer');
const { conversorNumerosALetras } = require('conversor-numero-a-letras-es-ar');

//agregar datos profesor a la plataforma
async function AddTeacher(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const nivel_academico = await adminModel().academicLevel();
        const tipo_contrato = await adminModel().tipoContrato();
        const labor = await adminModel().labor();
        const programa = await adminModel().programa();
        const usuariosdocentes = await adminModel().usuariodocente();
        res.render('users/add_teacher', { nivel_academico, tipo_contrato, labor, programa, usuariosdocentes });
    } else {
        req.flash('message', 'no eres administrador')
        res.render('users/user_profile');
    }
}

async function AddTeacherPost(req, res) {
    let ClaseConversor = conversor.conversorNumerosALetras;
    let miConversor = new ClaseConversor();
    const data = req.user.rol;
    const datos = req.body;

    if (data == 1) {
        //sacamos el correo electronico para email
        const correo = req.body.correo_electronico;
        //
        //vamos a sacar las horas semestrales calendario a
        const horas = req.body.horassemanales;
        const horassemestre = horas * 16;
        //fin formula
        //horas semestrales calendario B
        const horasB = req.body.horassemanalesB;
        const horassemestreB = horasB * 16;
        //
        const numero = req.body.salario;
        const aletras = miConversor.convertToText(numero);
        const Datos = {
            "nombres": req.body.nombres,
            "CC": req.body.CC,
            "ciudad_exp": req.body.ciudad_exp,
            "departamento_exp": req.body.departamento_exp,
            "contratoindividual": req.body.contratoindividual,
            "correo_electronico": req.body.correo_electronico,
            "id_Nivel_Aca": req.body.id_Nivel_Aca,
            "id_Contrato": req.body.id_Contrato,
            "id_labor": req.body.id_labor,
            "id_programa": req.body.id_programa,
            "fecha_inicio": req.body.fecha_inicio,
            "fecha_final": req.body.fecha_final,
            "salario": req.body.salario,
            "salarioenletras": aletras,
            "horassemanales": req.body.horassemanales,
            "dedicaciondocente": req.body.dedicaciondocente,
            "dedicacioninvestigacion": req.body.dedicacioninvestigacion,
            "horassemestre": horassemestre,
            "curso1": req.body.curso1,
            "curso2": req.body.curso2,
            "curso3": req.body.curso3,
            "curso4": req.body.curso4,
            "curso5": req.body.curso5,
            "curso6": req.body.curso6,
            "curso7": req.body.curso7,
            "curso8": req.body.curso8,
            "curso9": req.body.curso9,
            "curso10": req.body.curso10,
            "curso11": req.body.curso11,
            "curso12": req.body.curso12,
            "curso13": req.body.curso13,
            "curso14": req.body.curso14,
            "curso15": req.body.curso15,
            "curso16": req.body.curso16,
            "horassemanalesB": req.body.horassemanalesB,
            "dedicaciondocenteB": req.body.horassemanalesB,
            "dedicacioninvestigacionB": req.body.dedicacioninvestigacionB,
            "horassemestreB": horassemestreB,
            "fecha_inicioB": req.body.fecha_inicioB,
            "fecha_finalB": req.body.fecha_finalB,
            "contratolaboralB": req.body.contratolaboralB,
            "curso1B": req.body.curso1B,
            "curso2B": req.body.curso2B,
            "curso3B": req.body.curso3B,
            "curso4B": req.body.curso4B,
            "curso5B": req.body.curso5B,
            "curso6B": req.body.curso6B,
            "curso7B": req.body.curso7B,
            "curso8B": req.body.curso8B,
            "curso9B": req.body.curso9B,
            "curso10B": req.body.curso10B,
            "curso11B": req.body.curso11B,
            "curso12B": req.body.curso12B,
            "curso13B": req.body.curso13B,
            "curso14B": req.body.curso14B,
            "curso15B": req.body.curso15B,
            "curso16B": req.body.curso16B
        }
        await adminModel().add_teacher_post(Datos);
        const correo_electronico = Datos.correo_electronico;
        //email se envia de manera correcta al usuario que el admin registra en gestion fet
        //esta funcionalidad queda para majorarle: manejar variables de entorno.
        //se comenta la configuracion para en caso tal toque quitarla. 
        //funcina bien con gmail y outlook respectivimante en las pruebas realizadas el sabado 11:42pm 14-05-2022
        //investigar a fondo el protocolo smtp 
        contentHTML = `
                <h2>Hola ${correo_electronico}</h2><br>
                <p>Te han registrado en la plataforma gestionfet.com
                puedes completar tu registro en el siguiente enlace.... 
                https://gestionfet.com/signup <p/><br>
                
                <p>respetuosamente el equipo gestionfet.com... </p><br>
                <p>Fundacion escuela tecnologica de Neiva Jesus Oviedo Perez FET....</p>
            `;
        const transporter = nodemailer.createTransport({
            host: 'gestionfet.com',
            port: 465,
            secure: true,
            auth: {
                user: 'plataforma@gestionfet.com',
                pass: 'ASWE456rolpp'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: "'Plataforma Gestion FET'<plataforma@gestionfet.com>",
            to: `${correo_electronico}`,
            subject: 'Completar Registro',
            html: contentHTML
        });
        //fin de intento de enviar email
        req.flash('success', 'exito');
        res.redirect('/administrador/add_teacher');
    } else {
        req.flash('message', 'ocurre un error');
    }
}

//eliminar usuarios gestionfet
async function EliminarUsuariosModel(req, res) {
    const data = req.params.id;
    await adminModel().eliminarUsuariosModel(data);
    req.flash('success', 'exito');
    res.redirect('/administrador/add_teacher')
}

//LAS SIGUIENTES SON FUNCIONES DE CONFIGURACION DE LA PAGINA 
//----------------------------------------------------------------
//MENU CONFIGURACION DE PAGINA
async function MenuGestionarPagina(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        res.render('gestionar_pagina/gestionar_pagina');
    } else {
        res.render('users/user_profile');
    }
}

//ir a agregar nivel academico
async function AgregarNivelAcademico(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const nivel_academico = await adminModel().listarnivelacademico();
        res.render('gestionar_pagina/AgregarNivelAcademico', { nivel_academico })
    } else {
        res.render('users/user_profile')
    }
}

//agregar nivel academico post
async function AgregarNivelAcademicoPost(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const Datos = {
            "Academico": req.body.Academico
        }
        await adminModel().agregarnivelacademico(Datos);
        req.flash('success', 'Datos agregado con exito');
        res.redirect('/administrador/agregarNivelAcademico')
    } else {
        res.render('users/user_profile')
    }
}

//modificar nivel academico
async function ModificarNivelAcademico(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const datos = [
            req.body.Academico,
            req.params.id
        ]
        console.log(req.params.id);
        await adminModel().modificarnivelacademico(datos);
        req.flash('success', 'Dato Modificado con éxito');
        res.redirect('/administrador/agregarNivelAcademico')
    } else {
        req.flash('message', 'Existen errores con los roles. consulte al administrador de la pagina');
        res.redirect('/administrador/agregarNivelAcademico')
    }
}

//eliminar nivel academico
async function EliminarNivelAcademico(req, res) {
    const rol = req.user.rol;
    if (rol == 1) {
        const data = req.params.id;
        await adminModel().eliminarnivelacademico(data);
        req.flash('success', 'dato eliminado con exito');
        res.redirect('/administrador/agregarNivelAcademico');
    } else {
        req.flash('message', 'ocurre un error con los roles');
        res.redirect('/administrador/agregarNivelAcademico');
    }
}

//agregar programa academico
async function AgregarProgramaAcademico(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const programa = await adminModel().listarprogramaacademico();
        res.render('gestionar_pagina/AgregarPrograma', { programa })
    } else {
        res.render('users/user_profile')
    }
}
//agregar programa academico post.
async function AgregarProgramaPost(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const Datos = {
            "programa": req.body.programa
        }
        await adminModel().agregarprogramaacademico(Datos)
        req.flash('success', 'Datos agregado con exito');
        res.redirect('/administrador/AgregarPrograma')
    } else {
        req.flash('message', 'ocurre un error con los roles');
        res.redirect('/administrador/AgregarPrograma');
    }
}

//modificar programa academico
async function ModificarPrograma(req, res) {
    const rol = req.user.rol;
    if (rol == 1) {
        const datos = [
            req.body.programa,
            req.params.id
        ]
        await adminModel().modificarprogramaacademico(datos);
        req.flash('success', 'Dato Modificado con éxito');
        res.redirect('/administrador/AgregarPrograma')
    } else {
        req.flash('message', 'ocurre un error con los roles');
        res.redirect('/administrador/AgregarPrograma');
    }
}
//eliminar programa academico
async function EliminarProgramaAcademico(req, res) {
    const rol = req.user.rol;
    if (rol == 1) {
        const data = req.params.id;
        //await adminModel().eliminarnivelacademico(data);
        req.flash('success', 'dato eliminado con exito');
        res.redirect('/administrador/agregarNivelAcademico');
    } else {
        req.flash('message', 'ocurre un error con los roles');
        res.redirect('/administrador/agregarNivelAcademico');
    }
}

module.exports = {
    AddTeacher,
    AddTeacherPost,
    EliminarUsuariosModel,
    MenuGestionarPagina,
    AgregarNivelAcademico,
    AgregarNivelAcademicoPost,
    ModificarNivelAcademico,
    EliminarNivelAcademico,
    AgregarProgramaAcademico,
    AgregarProgramaPost,
    ModificarPrograma,
    EliminarProgramaAcademico
}