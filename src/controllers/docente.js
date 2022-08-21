const docenteModel = require('../models/docentes');
const conversor = require('conversor-numero-a-letras-es-ar');
const pdfDocument = require('pdfkit');
const PdfkitConstruct = require('pdfkit-construct');
const fs = require('fs');


//generar certificado sencillo
async function generarCertificadoSencillo(req, res,next) {
    const data = req.user.rol;
    if (data == 2) {
        let ClaseConversor = conversor.conversorNumerosALetras;
        let miConversor = new ClaseConversor();
        const cedula = [req.user.cc];
        const texto = await docenteModel().generartextpdf(cedula);
        //obtener fecha actual en letras 
        function obtenerFechaParaPdf() {
            const today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = String(today.getFullYear());


            dd = miConversor.convertToText(String(dd));
            mm = miConversor.convertirNroMesAtexto(String(mm));
            yyyy = miConversor.convertToText(String(yyyy));
            return `${dd} de ${mm} de ${yyyy}`;
        }
        //obtener en letras solo el mes
        function obtenerSoloElMes(){
            const hoy = new Date();
            var mes = String(hoy.getMonth() + 1).padStart(2, '0');
            mes = miConversor.convertirNroMesAtexto(String(mes));
            return `del mes ${mes}`;
        }
            
        const fecha = obtenerFechaParaPdf();
        const mes = obtenerSoloElMes();
        const f = new Date();
        const fecha_numero=f.getDate();
        //const mes = f.getMonth();
        const fecha_anio=f.getFullYear();
        const extraerinfo = JSON.parse(JSON.stringify(texto));
        const docente = extraerinfo[0]
        //convertir formato fecha desde la db. a formato legible para un certificado
        function covertirFechaInicioDeContrato(){
            const fechadedb= docente.fecha_inicio.replace('T05:00:00.000Z', '')
            const fcontratoini= new Date(fechadedb);
            
            var dd = String(fcontratoini.getDate(fechadedb)).padStart(2, '0');
            var mm = String(fcontratoini.getMonth(fechadedb) + 1).padStart(2, '0');
            var yyyy = String(fcontratoini.getFullYear(fechadedb));
            // dd = miConversor.convertToText(String(dd));
            mm = miConversor.convertirNroMesAtexto(String(mm));
            // yyyy = miConversor.convertToText(String(yyyy));
            return `${dd} de ${mm} de ${yyyy}`;
        }
        const inicio_contrato = covertirFechaInicioDeContrato();
        //Fin funcion convertir fecha
        
        //inicio pdf
        const doc = new pdfDocument({ bufferPage: true, font: 'Times-Roman' });
        const stream = res.writeHead(200, {
                        'Content-Type': 'application/pdf',
                         'Content-Disposition': `attachment;filename=${docente.nombres}.pdf`,
                        });
        doc.on('data', (data) => { stream.write(data) })
        doc.on('data', () => { stream.end() })
        //inicio diseño
          doc.image('./src/public/img/img_pdf/fet.jpg', 0, 0, {
            width: 600,
            height: 50
        });
         //espaciado
        doc.moveDown();
        doc.font('Times-Bold').fontSize(9).text(`401-GTH-172`)
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
         //titulo
        doc.font('Times-Bold').fontSize(10).text(`LA SUSCRITA COORDINADORA DE TALENTO HUMANA DE LA`, {
                width: 410,
                align: 'center'
        });
         doc.font('Times-Bold').fontSize(10).text(`FUNDACIÓN ESCUELA TECNOLÓGICA DE NEIVA “JESÚS OVIEDO PÉREZ – FET`, {
                width: 410,
                align: 'center'
        });
         //espaciado
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        //----
        //certifica que 
        doc.fontSize(13).text('Cerfifica que:', { align: 'center' })
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
         //texto del certificado
        const textoCerfificado = `El señor(a) ${docente.nombres} identificado con cédula de ciudadanía No. ${docente.CC} expedida en ${docente.ciudad_exp} - ${docente.departamento_exp}, labora en la  Fundación Escuela Tecnológica de Neiva “Jesús Oviedo Pérez”, vinculado mediante contrato de  trabajo a término fijo inferior a un año ${docente.contratoindividual} como ${docente.labor} ${docente.Tipo_Contrato},del programa ${docente.programa}, desde ${inicio_contrato} devengando un salario básico mensual mensual de ${docente.salarioenletras} PESOS M/CTE. ${docente.salario}.`;
        doc.fontSize(10).text(`${textoCerfificado}`, {
            align: 'justify'
        });
        doc.moveDown();
        doc.image('./src/public/img/img_pdf/lateral.jpg', 10, 220, {
            width:  18,
            height: 400
        });
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
             //fecha en que se imprime  
        const fechaDeExpedicion =` La presente Certificación se expide a solicitud de la interesado, a los (${fecha_numero}) dias ${mes} de  ${fecha_anio}`;
        doc.fontSize(10).text(`${fechaDeExpedicion}`, {
                align: 'justify'
            });
        //espaciado 
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        //-----
         //quien lo expide
        doc.fontSize(10).text('Cordialmente,', {
            align: 'justify'
            });
        //espaciado
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
           doc.image('./src/public/img/img_pdf/firma.jpg', 65, 555, {
            width: 150,
            height: 35
        });
           doc.fontSize(10).text('_______________________________', { 
            align: 'justify' 
            });
        doc.fontSize(10).text('MARIA FERNANDA VALENZUELA', {
            align: 'justify' 
        });
        doc.fontSize(10).text('Coordinadora Gestion Humana', { 
            align: 'justify' 
        });
        doc.fontSize(10).text('gestionhumana@fet.edu.co', {
            align: 'justify' 
        });
        //imagen footer
        doc.image('./src/public/img/img_pdf/fet_2.jpg', 0, 700, {
            width: 600,
            height: 65
        });
        doc.end();
        //fin pdf
    } else {
        req.flash('message', 'no tienes permiso')
        res.render('users/user_profile');
    }
}
//FIN CERTIFICADO SENCILLLO

//CERTIFICADO COMPLETO
async function generarCertificadoCompleto(req, res,next) {
    const data = req.user.rol;
    if (data == 2) {
        let ClaseConversor = conversor.conversorNumerosALetras;
        let miConversor = new ClaseConversor();
        const cedula = [req.user.cc];
        const texto = await docenteModel().generartextpdfCompleto(cedula);
        //obtener fecha actual en letras 
        function obtenerFechaParaPdf() {
            const today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = String(today.getFullYear());

            dd = miConversor.convertToText(String(dd));
            mm = miConversor.convertirNroMesAtexto(String(mm));
            yyyy = miConversor.convertToText(String(yyyy));
            return `${dd} de ${mm} de ${yyyy}`;
        }
        //obtener en letras solo el mes
        function obtenerSoloElMes(){
            const hoy = new Date();
            var mes = String(hoy.getMonth() + 1).padStart(2, '0');
            mes = miConversor.convertirNroMesAtexto(String(mes));
            return `del mes ${mes}`;
        }
        const fecha = obtenerFechaParaPdf();
        const mes = obtenerSoloElMes();
        const f = new Date();
        const fecha_numero=f.getDate();
        const fecha_anio=f.getFullYear();
        const extraerinfo = JSON.parse(JSON.stringify(texto));
        const docente = extraerinfo[0]
        //convertir formato fecha certificado periodo A 
        function covertirFechaInicioDeContrato(){
            const fechadedb= docente.fecha_inicio.replace('T05:00:00.000Z', '')
            const fcontratoini= new Date(fechadedb);
            
            var dd = String(fcontratoini.getDate(fechadedb)).padStart(2, '0');
            var mm = String(fcontratoini.getMonth(fechadedb) + 1).padStart(2, '0');
            var yyyy = String(fcontratoini.getFullYear(fechadedb));
            mm = miConversor.convertirNroMesAtexto(String(mm));
            return `${dd} de ${mm} de ${yyyy}`;
        }
        const inicio_contrato = covertirFechaInicioDeContrato();
        
        function convertirFechaFinPeriodoA(){
            const fechafin = docente.fecha_final.replace('T05:00:00.000Z');
            const fcontrato= new Date(fechafin);
            
            var dd = String(fcontrato.getDate(fechafin)).padStart(2, '0');
            var mm = String(fcontrato.getMonth(fechafin) + 1).padStart(2, '0');
            var yyyy = String(fcontrato.getFullYear(fechafin));
            mm = miConversor.convertirNroMesAtexto(String(mm));
            return `${dd} de ${mm} de ${yyyy}`;
        }
        const final_contrato = convertirFechaFinPeriodoA();
        //Fin funcion convertir fecha periodo A
        
        //inicio funcion convertir fecha periodo B
         function covertirFechaInicioDeContratoB(){
            const fechadedbB= docente.fecha_inicioB.replace('T05:00:00.000Z', '')
            const fcontratoiniB= new Date(fechadedbB);
            var dd = String(fcontratoiniB.getDate(fechadedbB)).padStart(2, '0');
            var mm = String(fcontratoiniB.getMonth(fechadedbB) + 1).padStart(2, '0');
            var yyyy = String(fcontratoiniB.getFullYear(fechadedbB));
            mm = miConversor.convertirNroMesAtexto(String(mm));
            return `${dd} de ${mm} de ${yyyy}`;
        }
        const inicio_contratoB = covertirFechaInicioDeContratoB();

        function covertirFechaFinDeContratoB(){
            const fechafinalperiodoB = docente.fecha_finalB.replace('T05:00:00.000Z', '')
            const ffincontratoB = new Date(fechafinalperiodoB);
            
            var dd = String(ffincontratoB.getDate(fechafinalperiodoB)).padStart(2, '0');
            var mm = String(ffincontratoB.getMonth(fechafinalperiodoB) + 1).padStart(2, '0');
            var yyyy = String(ffincontratoB.getFullYear(fechafinalperiodoB));
            
            mm = miConversor.convertirNroMesAtexto(String(mm));
             return `${dd} de ${mm} de ${yyyy}`;
        }
        const fin_contratoB = covertirFechaFinDeContratoB();
        
        //fin conversion fecha periodo B
        //inicio pdf
        const doc = new  PdfkitConstruct({ bufferPage: true, font: 'Times-Roman' });
        const stream = res.writeHead(200, {
                        'Content-Type': 'application/pdf',
                         'Content-Disposition': `attachment;filename=${docente.nombres}.pdf`,
                        });
        doc.on('data', (data) => { stream.write(data) })
        doc.on('data', () => { stream.end() })
        //inicio diseño
          doc.image('./src/public/img/img_pdf/fet.jpg', 0, 0, {
            width: 600,
            height: 50
        });
                               //espaciado
        doc.moveDown();
        doc.font('Times-Bold').fontSize(9).text(`401-GTH-172`)
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
                     
        doc.moveDown();
               
        //titulo
        doc.font('Times-Bold').fontSize(10).text(`LA SUSCRITA COORDINADORA DE TALENTO HUMANA DE LA`, {
            width: 410,
            align: 'center'
        });
         doc.font('Times-Bold').fontSize(10).text(`FUNDACIÓN ESCUELA TECNOLÓGICA DE NEIVA “JESÚS OVIEDO PÉREZ – FET`, {
            width: 410,
            align: 'center'
        });
               
         //espaciado
        doc.moveDown();
        doc.moveDown();
        //----
        //certifica que 
        doc.fontSize(13).text('Cerfifica que:', { align: 'center' })
        doc.moveDown();
        
        //texto del certificado
        const textoCerfificado = `El señor(a) ${docente.nombres} identificado con cédula de ciudadanía No. ${docente.CC} expedida en ${docente.ciudad_exp} - ${docente.departamento_exp}, labora en la  Fundación Escuela Tecnológica de Neiva “Jesús Oviedo Pérez”, vinculado mediante contrato de  trabajo a término fijo inferior a un año ${docente.contratoindividual} como ${docente.labor} ${docente.Tipo_Contrato} de acuerdo a la asignación de cursos y periodos académicos relacionados a continuación:`;
        doc.fontSize(10).text(`${textoCerfificado}`, {
        align: 'justify'
        });
        
        doc.image('./src/public/img/img_pdf/lateral.jpg', 10, 220, {
            width:  18,
            height: 400
        });
         //espaciado
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(12).text(`Periodo 2022-1`,{
            align:'center'
        });
        doc.moveDown();
        //texto periodo 2021 I 
        const textoPeriodoI = `Contrato de trabajo escrito a término fijo inferior a un año  ${docente.contratoindividual} cargo ${docente.labor} programa ${docente.programa}. ${docente.horassemestre}, horas semestre, asignacion de ${docente.horassemanales} de las cuales ${docente.dedicaciondocente} para dedicacion docente y ${docente.dedicacioninvestigacion} para investigacion  a partir de ${inicio_contrato} hasta ${final_contrato}`;
        doc.fontSize(10).text(`${textoPeriodoI}`, {
        align: 'justify'
        });
        doc.moveDown();
        doc.moveDown();
        const tituloPeriodoA = `Programa: ${docente.programa}`;
        doc.fontSize(10).text(`${tituloPeriodoA}`, {
        align: 'justify'
        });
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(12).text(`Cursos:`,{
            align:'center'
        });
        doc.moveDown();
        doc.moveDown();
         const cursos1A = `${docente.curso1} ${docente.curso2} ${docente.curso3} ${docente.curso4} ${docente.curso5} ${docente.curso6} ${docente.curso7} ${docente.curso8} ${docente.curso9} ${docente.curso10} ${docente.curso11} ${docente.curso12} ${docente.curso13} ${docente.curso14} ${docente.curso15} ${docente.curso16}`;
        doc.fontSize(10).text(`${cursos1A}`, {
          columns: 1,
          columnGap: 15,
          height: 100,
          width: 465,  
          align: 'justify'
        });
      
        //espaciado
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(12).text(`Periodo 2022-2`,{
            align:'center'
        });
        doc.moveDown(); 
        //texto periodo B 
        const textoPeriodoII = `Contrato de trabajo escrito a término fijo inferior a un año  ${docente.contratolaboralB} cargo ${docente.labor} programa ${docente.programa}. ${docente.horassemestreB}, horas semestre, asignacion de ${docente.horassemanalesB} de las cuales ${docente.dedicaciondocenteB} para dedicacion docente y ${docente.dedicacioninvestigacionB} para investigacion  a partir de ${inicio_contratoB} hasta ${fin_contratoB}`;
        doc.fontSize(10).text(`${textoPeriodoII}`, {
        align: 'justify'
        });
        doc.moveDown();
        doc.moveDown();
       doc.fontSize(12).text(`Cursos:`,{
            align:'center'
        });
        
        const cursos1B = `${docente.curso1B} -${docente.curso2B} ${docente.curso3B} ${docente.curso4B} ${docente.curso5B} -${docente.curso6B} -${docente.curso7B} -${docente.curso8B} ${docente.curso9B} ${docente.curso10B} ${docente.curso11B} ${docente.curso12B} ${docente.curso13B} ${docente.curso14B} ${docente.curso15B} ${docente.curso16B}`;
        doc.fontSize(10).text(`${cursos1B}`, {
          columns: 1,
          columnGap: 15,
          height: 100,
          width: 465,  
          align: 'justify'
        });
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        //imagen footer
        doc.image('./src/public/img/img_pdf/fet_2.jpg', 0, 700, {
            width: 600,
            height: 65
        });
        //fin hoja 1
        //hoja 2
        doc.fontSize(10).text(`Las siguientes funciones a cargo del DOCENTE TIEMPO COMPLETO:`,{
            align:'justify'
        });
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(10).text(`- Planear, programar, orientar y desarrollar cursos, seminarios, talleres y demás actividades en las áreas de su conocimiento o especialización y atender todas las labores conexas con ese trabajo docente en cualquiera de las modalidades educativas que imparta la FET.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Desarrollar actividades de investigación.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Adelantar actividades de proyección social, servicio, asesoría y consultoría dentro de la FET y las que ésta determine para proyectarse a sectores externos a la Institución.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Dirigir y evaluar trabajos o tesis de grado de las distintas modalidades educativas que existan en la FET.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Participar en los procesos de autoevaluación institucional.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Realizar las pruebas evaluativas a los estudiantes, debidamente ordenadas conforme al calendario académico.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Colaborar en las actividades de planeación, diseño y evaluación curricular.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Asistir a cursos y actividades de capacitación docente.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Desarrollar actividades conducentes a la produccion electual.`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Cumplir con los horarios en los que tenga que prestar sus servicios a la FET`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Ejecutar por si mismo las funciones asignadas y cumplir estrictamente las funciones que le sean dadas por la FET o por quien le represente, respecto al desarrollo de sus actividades`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Reportar en la plataforma de registro de calificaciones con forme al calendario academico`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- Todas las actividades que de acuerdo con ls procesos son de su responsabilidad, garantizando la calidad de la informacion y su coherencia con el proceso formativo, tales como: _Registro de los jucios evaluativos. _ Comunicar al director de programa oportunamente anomalìas, inconsistencias, novedades de Estudiantes y hallazgos en el registro de la informacion y asistir puntualmente a las reuniones de programa y generales que sean programadas`,{
            align:'justify'
        });
        doc.fontSize(10).text(`- `,{
            align:'justify'
        });
        doc.moveDown();
        doc.moveDown();
        //fecha en que se imprime  
        const fechaDeExpedicion =` La presente Certificación se expide a solicitud de la interesado, a los (${fecha_numero}) dias ${mes} de  ${fecha_anio}`;
        doc.fontSize(10).text(`${fechaDeExpedicion}`, {
                align: 'justify'
            });
        doc.moveDown();
        doc.moveDown(); 
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.moveDown();
        doc.fontSize(10).text('_______________________________',65,590, { 
            align: 'justify' 
            });
        doc.fontSize(10).text('MARIA FERNANDA VALENZUELA',65,600, {
            align: 'justify' 
        });
        doc.fontSize(10).text('Coordinadora Gestion Humana',65,610, { 
            align: 'justify' 
        });
        doc.fontSize(10).text('gestionhumana@fet.edu.co',65,620, {
            align: 'justify' 
        });
        
        
        //Membrete superior
          doc.image('./src/public/img/img_pdf/fet.jpg', 0, 0, {
            width: 600,
            height: 50
        });
        //membrete lateral
        doc.image('./src/public/img/img_pdf/lateral.jpg', 10, 220, {
            width:  18,
            height: 400
        });
        
        doc.image('./src/public/img/img_pdf/firma.jpg', 65, 555, {
            width: 150,
            height: 35
        });
        //membrete inferior
        doc.image('./src/public/img/img_pdf/fet_2.jpg', 0, 700, {
            width: 600,
            height: 65
        });
        
        doc.end();
        //fin pdf
    } else {
        req.flash('message', 'no tienes permiso')
        res.render('users/user_profile');
    }
}

//FIN CERTIFICADO COMPLETO
//listar docentes
async function listTeacherController(req, res) {
    const data = req.user.rol;
    if (data == 1) {
        const teacher_list = await docenteModel().listteacher();
        res.render('users/list_teacher', { teacher_list });
    } else {
        res.render('users/user_profile');
    }

}


//ORTOGRAFIA BIEN HASTA AQUI

//modificar docentes
async function ModificarDocenteController(req, res) {
    let ClaseConversor = conversor.conversorNumerosALetras;
    let miConversor = new ClaseConversor();
    //const datos = req.body;
    //salario en letras
    const numero = req.body.salario;
    const salarioenletras = miConversor.convertToText(numero);
    req.body.salarioenletras=salarioenletras;
    //fin salario en letras
    
    //inicio horas semestrales calendario a
    const horas=req.body.horassemanales;
    const horassemestre = horas * 16;
    req.body.horassemestre=horassemestre;
    //fin horas semestrales calendario a
    
    //inicio horas semestrales calendario b
    const horasB=req.body.horassemanalesB;
    const horassemestreB = horasB*16;
    req.body.horassemestreB=horassemestreB;
    //inicio horas semestrales calendario b
     const data = [
            req.body.nombres,
            req.body.CC,
            req.body.ciudad_exp,
            req.body.correo_electronico,
            req.body.departamento_exp,
            req.body.contratoindividual,
            req.body.id_Nivel_Aca,
            req.body.id_Contrato,
            req.body.id_labor,
            req.body.id_programa,
            req.body.fecha_inicio,
            req.body.fecha_final,
            req.body.salario,
            req.body.salarioenletras,
            req.body.horassemanales,
            req.body.dedicaciondocente,
            req.body.dedicacioninvestigacion,
            req.body.horassemestre,
            req.body.curso1,
            req.body.curso2,
            req.body.curso3,
            req.body.curso4,
            req.body.curso5,
            req.body.curso6,
            req.body.curso7,
            req.body.curso8,
            req.body.curso9,
            req.body.curso10,
            req.body.curso11,
            req.body.curso12,
            req.body.curso13,
            req.body.curso14,
            req.body.curso15,
            req.body.curso16,
            req.body.horassemanalesB,
            req.body.dedicaciondocenteB,
            req.body.dedicacioninvestigacionB,
            req.body.horassemestreB,
            req.body.fecha_inicioB,
            req.body.fecha_finalB,
            req.body.contratolaboralB,
            req.body.curso1B,
            req.body.curso2B,
            req.body.curso3B,
            req.body.curso4B,
            req.body.curso5B,
            req.body.curso6B,
            req.body.curso7B,
            req.body.curso8B,
            req.body.curso9B,
            req.body.curso10B,
            req.body.curso11B,
            req.body.curso12B,
            req.body.curso13B,
            req.body.curso14B,
            req.body.curso15B,
            req.body.curso16B,
            req.params.id
        ]
    await docenteModel().modificarDocentesModel(data);
    req.flash('success', 'Modificado Exito');
    res.redirect('/docente/gestionar_docente');
}



async function EliminarDocenteController(req, res) {
    const data = req.params.id;
    await docenteModel().eliminarDocentesModel(data);
    req.flash('success', 'exito');
    res.redirect('/docente/gestionar_docente')
}

//pagina plana talento humano
async function TalentoHumano(req, res) {
    
     const archivos = fs.readdir('src/public/archivos', (error, files) => {
        if (error) {
            throw error;
        } else {
            const a = files;
            const b = JSON.stringify(a);
            res.render('docentes/talento_humano', { a });
        }
    });
   // res.render('docentes/talento_humano');
}

//el get de form para subir archivos
async function IraSubirArchivos(req,res){
    res.render('docentes/form_documentos');
}

//el post de form para subir archivos
async function IraSubirArchivosPost(req,res){
    res.render('docentes/form_documentos');
}


module.exports = {
    listTeacherController,
    ModificarDocenteController,
    EliminarDocenteController,
    generarCertificadoSencillo,
    TalentoHumano,
    IraSubirArchivos,
    generarCertificadoCompleto,
    IraSubirArchivosPost
}
