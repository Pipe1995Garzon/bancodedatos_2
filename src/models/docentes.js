const pool = require('../database');
const passport = require('passport');


module.exports = function() {
    //query para generar el texto pdf sencillo
    async function generartextpdf(cedula) {
        let sql = (`SELECT doc.nombres,doc.CC,doc.ciudad_exp,doc.departamento_exp,doc.fecha_inicio,doc.salario,doc.contratoindividual,doc.salarioenletras, aca.Academico,tc.Tipo_Contrato,la.labor,pro.programa 
      FROM docentes doc,nivel_academico aca , tipo_contrato tc, labor la,programa pro
      WHERE doc.CC=? AND aca.id_Nivel_Aca=doc.id_Nivel_Aca AND pro.id_programa=doc.id_programa AND tc.id_Contrato=doc.id_Contrato AND doc.id_labor=la.id_labor`);
        return await pool.query(sql, cedula)
    }
    //fin generar pdf sencillo
    //inicio pdf completo
    
    async function generartextpdfCompleto(cedula) {
        let sql = (`SELECT doc.nombres,doc.CC,doc.ciudad_exp,doc.departamento_exp,doc.fecha_inicio,doc.fecha_final,doc.salario,
                    doc.contratoindividual,doc.salarioenletras,doc.horassemanales,doc.dedicaciondocente,doc.dedicacioninvestigacion,
                    doc.horassemestre,doc.curso1,doc.curso2,doc.curso3,doc.curso4,doc.curso5,doc.curso6,doc.curso7,doc.curso8,doc.curso9,
                    doc.curso10,doc.curso11,doc.curso12,doc.curso13,doc.curso14,doc.curso15,doc.curso16,doc.horassemanalesB,doc.dedicaciondocenteB,
                    doc.dedicacioninvestigacionB,doc.horassemestreB,doc.fecha_inicioB,doc.fecha_finalB, doc.contratolaboralB, doc.curso1B,doc.curso2B,
                    doc.curso3B,doc.curso4B,doc.curso5B,doc.curso6B,doc.curso7B,doc.curso8B,doc.curso9B,doc.curso10B,doc.curso11B,doc.curso12B,doc.curso13B,
                    doc.curso14B, doc.curso15B,doc.curso16B, aca.Academico,tc.Tipo_Contrato,la.labor,pro.programa 
                    FROM docentes doc,nivel_academico aca , tipo_contrato tc, labor la,programa pro
                    WHERE doc.CC=? AND aca.id_Nivel_Aca=doc.id_Nivel_Aca AND pro.id_programa=doc.id_programa AND tc.id_Contrato=doc.id_Contrato AND doc.id_labor=la.id_labor`);
        return await pool.query(sql, cedula)
    }
    
    //fin de pdf completo
    //listar docentes para formulario modificar
     async function listteacher() {
        let querylist = (`SELECT doc.id_Docentes, doc.nombres, doc.CC, doc.ciudad_exp, doc.departamento_exp, doc.correo_electronico,doc.contratoindividual, 
        doc.salario,doc.salarioenletras, niv.Academico, con.Tipo_Contrato, 
        lab.labor, pro.programa, doc.fecha_inicio,
        doc.fecha_final FROM docentes doc, nivel_academico niv,
        tipo_contrato con, labor lab, programa pro WHERE doc.id_Nivel_Aca=niv.id_Nivel_Aca AND 
        doc.id_Contrato=con.id_Contrato AND doc.id_labor=lab.id_labor AND doc.id_programa=pro.id_programa`);
        return await pool.query(querylist);
    }
    
    //modificar docentes
    async function modificarDocentesModel(data) {
        let sql = `update docentes SET nombres=?,CC=?,ciudad_exp=?,correo_electronico=?,
                   departamento_exp=?,contratoindividual=?,id_Nivel_Aca=?,id_Contrato=?,id_labor=?,
                   id_programa=?,fecha_inicio=?,fecha_final=?,salario=?,salarioenletras=?,horassemanales=?,
                   dedicaciondocente=?, dedicacioninvestigacion=?,horassemestre=?, curso1=?,curso2=?, curso3=?,
                   curso4=?,curso5=?,curso6=?,curso7=?,curso8=?,curso9=?,curso10=?,curso11=?,
                   curso12=?,curso13=?,curso14=?,curso15=?,curso16=?,horassemanalesB=?, 
                   dedicaciondocenteB=?,dedicacioninvestigacionB=?,horassemestreB=?,fecha_inicioB=?,
                   fecha_finalB=?,contratolaboralB=?,curso1B=?,curso2B=?,curso3B=?,curso4B=?,curso5B=?,
                   curso6B=?,curso7B=?,curso8B=?,curso9B=?,curso10B=?,curso11B=?,curso12B=?,curso13B=?,curso14B=?,
                   curso15B=?,curso16B=?    WHERE id_Docentes=?`;
        return await pool.query(sql, data);
    }
    
     //delete employees
    async function eliminarDocentesModel(docentes) {
        let sql = "delete from docentes where id_Docentes = ?";
        return await pool.query(sql, docentes);
    }

    return {
        generartextpdf,
        listteacher,
        modificarDocentesModel,
        eliminarDocentesModel,
        generartextpdfCompleto
    }
}