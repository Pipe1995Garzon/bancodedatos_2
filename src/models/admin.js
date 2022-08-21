const pool = require('../database');
const passport = require('passport');


module.exports = function() {

    //listar nivel academico profe
    async function academicLevel() {
        let querylist = "select * from nivel_academico";
        return await pool.query(querylist);
    }

    //listar tipo de contrato docente
    async function tipoContrato() {
        let querylist = "select * from tipo_contrato";
        return await pool.query(querylist);
    }

    //listar labor docente
    async function labor() {
        let querylist = "select * from labor";
        return await pool.query(querylist);
    }

    //listar programa
    async function programa() {
        let querylist = "select * from programa";
        return await pool.query(querylist);
    }

    //insertar docente
    async function add_teacher_post(docente) {
        let sql = "insert into docentes set ?";
        return await pool.query(sql, docente);
    }

    //mostrar usuarios rol 2
    async function usuariodocente() {
        let querylist = "select * from usuarios where id_rol=2";
        return await pool.query(querylist);
    }

    //eliminar usuarios gestion fet
    async function eliminarUsuariosModel(usuarios) {
        let sql = "delete from usuarios where id_usuario = ?";
        return await pool.query(sql, usuarios);
    }

    //agregar nivel academico gestion fet.
    async function agregarnivelacademico(Datos) {
        let sql = "insert into nivel_academico set ?";
        return await pool.query(sql, Datos);
    }
    //listar nivel academico gestion fet
    async function listarnivelacademico() {
        let nivel = "select * from nivel_academico";
        return await pool.query(nivel);
    }
    //modificar nivel academico gestion fet
    async function modificarnivelacademico(academico) {
        let sql = 'update nivel_academico set Academico =? where id_Nivel_Aca =?';
        return await pool.query(sql, academico)
    }
    //eliminar nivel academico gestion fet
    async function eliminarnivelacademico(academico) {
        let sql = 'delete from nivel_academico where id_Nivel_Aca =?';
        return await pool.query(sql, academico);
    }

    //listar programa academico
    async function listarprogramaacademico() {
        let programa = 'select * from programa';
        return await pool.query(programa)
    }
    //agregar programa academico
    async function agregarprogramaacademico(Datos) {
        let sql = 'insert into programa set ?';
        return await pool.query(sql, Datos)
    }
    //modificar programa academico. 
    async function modificarprogramaacademico(programa) {
        let sql = 'update programa set programa =? where id_programa =?';
        return await pool.query(sql, programa)
    }

    async function eliminarprogramaacademico(programa) {
        let sql = 'delete from programa where id_programa =?';
        return await pool.query(sql, programa);
    }
    return {
        academicLevel,
        tipoContrato,
        labor,
        programa,
        add_teacher_post,
        usuariodocente,
        eliminarUsuariosModel,
        agregarnivelacademico,
        listarnivelacademico,
        modificarnivelacademico,
        eliminarnivelacademico,
        listarprogramaacademico,
        agregarprogramaacademico,
        modificarprogramaacademico,
        eliminarprogramaacademico
    }
}