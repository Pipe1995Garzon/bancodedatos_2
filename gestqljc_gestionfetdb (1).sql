-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 20-06-2022 a las 22:30:10
-- Versión del servidor: 10.3.34-MariaDB-log-cll-lve
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestqljc_gestionfetdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrativos`
--

CREATE TABLE `administrativos` (
  `id_Administrativos` int(11) NOT NULL,
  `Nomina` varchar(30) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Cedula` int(11) NOT NULL,
  `Correo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

CREATE TABLE `docentes` (
  `id_Docentes` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `correo_electronico` varchar(50) NOT NULL,
  `CC` int(11) NOT NULL,
  `ciudad_exp` varchar(50) NOT NULL,
  `departamento_exp` varchar(50) NOT NULL,
  `contratoindividual` varchar(20) NOT NULL,
  `id_Nivel_Aca` int(11) DEFAULT NULL,
  `id_Contrato` int(11) NOT NULL,
  `id_labor` int(11) NOT NULL,
  `id_programa` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_final` date NOT NULL,
  `salario` int(11) NOT NULL,
  `salarioenletras` varchar(90) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `id_tiempo` int(11) NOT NULL,
  `horassemanales` int(11) NOT NULL,
  `dedicaciondocente` int(11) NOT NULL,
  `dedicacioninvestigacion` int(11) NOT NULL,
  `horassemestre` int(11) NOT NULL,
  `curso1` varchar(50) NOT NULL,
  `curso2` varchar(50) NOT NULL,
  `curso3` varchar(50) NOT NULL,
  `curso4` varchar(50) NOT NULL,
  `curso5` varchar(50) NOT NULL,
  `curso6` varchar(50) NOT NULL,
  `curso7` varchar(50) NOT NULL,
  `curso8` varchar(50) NOT NULL,
  `curso9` varchar(50) NOT NULL,
  `curso10` varchar(50) NOT NULL,
  `curso11` varchar(50) NOT NULL,
  `curso12` varchar(50) NOT NULL,
  `curso13` varchar(50) NOT NULL,
  `curso14` varchar(50) NOT NULL,
  `curso15` varchar(50) NOT NULL,
  `curso16` varchar(50) NOT NULL,
  `horassemanalesB` int(11) NOT NULL,
  `dedicaciondocenteB` int(11) NOT NULL,
  `dedicacioninvestigacionB` int(11) NOT NULL,
  `horassemestreB` int(11) NOT NULL,
  `fecha_inicioB` date NOT NULL,
  `fecha_finalB` date NOT NULL,
  `contratolaboralB` varchar(20) NOT NULL,
  `curso1B` varchar(50) NOT NULL,
  `curso2B` varchar(50) NOT NULL,
  `curso3B` varchar(50) NOT NULL,
  `curso4B` varchar(50) NOT NULL,
  `curso5B` varchar(50) NOT NULL,
  `curso6B` varchar(50) NOT NULL,
  `curso7B` varchar(50) NOT NULL,
  `curso8B` varchar(50) NOT NULL,
  `curso9B` varchar(50) NOT NULL,
  `curso10B` varchar(50) NOT NULL,
  `curso11B` varchar(50) NOT NULL,
  `curso12B` varchar(50) NOT NULL,
  `curso13B` varchar(50) NOT NULL,
  `curso14B` varchar(50) NOT NULL,
  `curso15B` varchar(50) NOT NULL,
  `curso16B` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`id_Docentes`, `nombres`, `correo_electronico`, `CC`, `ciudad_exp`, `departamento_exp`, `contratoindividual`, `id_Nivel_Aca`, `id_Contrato`, `id_labor`, `id_programa`, `fecha_inicio`, `fecha_final`, `salario`, `salarioenletras`, `id_usuario`, `id_rol`, `id_tiempo`, `horassemanales`, `dedicaciondocente`, `dedicacioninvestigacion`, `horassemestre`, `curso1`, `curso2`, `curso3`, `curso4`, `curso5`, `curso6`, `curso7`, `curso8`, `curso9`, `curso10`, `curso11`, `curso12`, `curso13`, `curso14`, `curso15`, `curso16`, `horassemanalesB`, `dedicaciondocenteB`, `dedicacioninvestigacionB`, `horassemestreB`, `fecha_inicioB`, `fecha_finalB`, `contratolaboralB`, `curso1B`, `curso2B`, `curso3B`, `curso4B`, `curso5B`, `curso6B`, `curso7B`, `curso8B`, `curso9B`, `curso10B`, `curso11B`, `curso12B`, `curso13B`, `curso14B`, `curso15B`, `curso16B`) VALUES
(36, 'WILLIAM ORLANDO GAVIRIA RAMIREZ', 'william_gaviriara@fet.edu.co', 7733073, 'Neiva', 'Huila', 'CT 10-2022A', 2, 1, 1, 1, '2022-01-01', '2022-06-04', 2448000, 'dos millones cuatrocientos cuarenta y ocho mil', 47, 0, 0, 40, 30, 10, 640, 'FINANZAS I', 'FINANZAS II', 'FINANZAS III', 'ADMINISTRACION I', 'ADMINISTRACION II', 'ADMINISTRACION III', 'ADMINISTRACION IV', 'EMPREDIMIENTO I', '', '', '', '', '', '', '', '', 40, 20, 20, 640, '2022-08-05', '2022-11-17', 'CT 2022-2', 'FINANZAS I', 'FINANZAS II', 'FINANZAS III', 'FINANZAS IV', 'EMPRENDIMIENTO I', 'CONCEPTO DE EMPRESA I', 'MATEMATICAS FINANCIERA I', 'MATEMATICA FINANCIERA II', 'MATEMATICA FINANCIERA III', '', '', '', '', '', '', ''),
(37, 'DANIELA FERNANDA HUESO CALDERON', 'daniela_huesoga@fet.edu.co', 1075289057, 'Neiva', 'Huila', 'CT 10-2022A', 3, 1, 1, 1, '2022-01-31', '2022-06-04', 2244000, 'dos millones doscientos cuarenta y cuatro mil', 48, 0, 0, 40, 20, 20, 640, 'FINANZAS I', 'FINANZAS II', 'FINANZAS III', 'FINANZAS IV', 'ADMINISTRACION II', 'TEORIA DE LA EMPRESA', 'FUNDAMENTOS DEL IVA', 'INDUSTRIA I', '', '', '', '', '', '', '', '', 40, 20, 20, 640, '2022-08-05', '2022-12-09', 'CT 2022-2', 'FINANZAS I', 'FINANZAS II', 'FINANZAS III', 'FINANZAS IV', 'EMPRENDIMIENTO I', 'CONCEPTO DE EMPRESA I', 'TEORIA DE LAS VENTAS I', 'MATEMATICA FINANCIERA II', '', '', '', '', '', '', '', ''),
(43, 'carla milena gomez cabrera', 'karla_gomezca@fet.edu.co', 26422543, 'Campoalegre', 'Huila', 'CT 12-2022A', 2, 1, 1, 1, '2022-05-04', '2022-06-04', 2244000, 'dos millones doscientos cuarenta y cuatro mil', 55, 0, 0, 0, 0, 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0, 0, '0000-00-00', '0000-00-00', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(63, 'JHON MAURICIO SERRATO ', 'john_serratoco@fet.edu.co', 12265297, 'Pitalito', 'Huila', 'CT 55 -2021A', 3, 1, 4, 3, '2022-02-18', '2022-06-05', 2244000, 'dos millones doscientos cuarenta y cuatro mil', 58, 0, 0, 40, 38, 2, 640, 'REDES Y COMUNICACION', 'REDES Y COMUNICACION', 'REDES Y COMUNICACION', 'ADMINISTRACION ANAVA', 'SEGURIDAD INFORMATICA', 'TELEMATICA', 'TELECOMUNICACIONES', 'PRACTICA PROFESIONAL', '', '', '', '', '', '', '', '', 40, 40, 2, 640, '2022-08-09', '2022-11-27', 'CT 96-2021', 'REDES Y COMUNICACION', 'REDES Y COMUNICACION', 'REDES Y COMUNICACION', 'ADMINISTRACION AVANZ', 'TELEMATICA', 'AUDITORIA DE SISTEMA', 'TELECOMUNICACIONES', '', '', '', '', '', '', '', '', ''),
(64, 'JORGE ESNEIDER HENAO GONZALES', 'jorge_henaogo@fet.edu.co', 1080363128, 'La Argentina', 'Huila', 'CT 38-2022A', 3, 1, 1, 3, '2022-02-04', '2022-06-04', 2142000, 'dos millones ciento cuarenta y dos mil', 59, 0, 0, 40, 38, 2, 640, 'REDES Y COMUNICACION', 'Calculo II', 'Calculo I', 'PROGRAMACION AVANZAD', 'TRABAJO DE GRADO', 'PRACTICA PROFESIONAL', 'ARQUITECTURA DE SOFT', 'Geometria II', '', '', '', '', '', '', '', '', 40, 40, 2, 640, '2022-08-08', '2022-11-18', 'CT 2022-2', 'Calculo I', 'TRABAJO DE GRADO', 'ARQUITECTURA DE SOFT', 'PROGRAMACION AVANZAD', 'ECUACIONES DIFERENCI', 'AUDITORIA DE SISTEMA', 'TELECOMUNICACIONES', 'GEOMETRIA II', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id_empleado` int(11) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `apellido` varchar(25) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados_fet`
--

CREATE TABLE `empleados_fet` (
  `id_empleado_fet` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `apellido` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `id_programa` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `empleados_fet`
--

INSERT INTO `empleados_fet` (`id_empleado_fet`, `nombre`, `apellido`, `direccion`, `edad`, `id_programa`, `id_usuario`) VALUES
(1, 'Alexandra ', 'Roa', 'km 10 via al sur', 25, 6, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha_contrato`
--

CREATE TABLE `fecha_contrato` (
  `id_Inicio_Contrato` int(11) NOT NULL,
  `Inicio` datetime NOT NULL,
  `Finalizacion` datetime NOT NULL,
  `Nomina` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hola`
--

CREATE TABLE `hola` (
  `id` int(11) NOT NULL,
  `hola` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hola`
--

INSERT INTO `hola` (`id`, `hola`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `labor`
--

CREATE TABLE `labor` (
  `id_labor` int(11) NOT NULL,
  `labor` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `labor`
--

INSERT INTO `labor` (`id_labor`, `labor`) VALUES
(1, 'Docente'),
(2, 'Investigador'),
(3, 'Externo'),
(4, 'Administrativo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_usuarios`
--

CREATE TABLE `lista_usuarios` (
  `id_lista_usuarios` int(11) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `apellido` varchar(25) DEFAULT NULL,
  `identificacion` int(11) DEFAULT NULL,
  `correo_electronico` varchar(50) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `id_rol` int(11) DEFAULT NULL,
  `id_labor` int(11) DEFAULT NULL,
  `id_Inicio_Contrato` int(11) DEFAULT NULL,
  `id_Nivel_Aca` int(11) DEFAULT NULL,
  `id_programa` int(11) DEFAULT NULL,
  `id_tiempo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nivel_academico`
--

CREATE TABLE `nivel_academico` (
  `id_Nivel_Aca` int(11) NOT NULL,
  `Academico` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `nivel_academico`
--

INSERT INTO `nivel_academico` (`id_Nivel_Aca`, `Academico`) VALUES
(1, 'Pregrado'),
(2, 'Especializacion'),
(3, 'Magister'),
(4, 'Doctorado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE `programa` (
  `id_programa` int(11) NOT NULL,
  `programa` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `programa`
--

INSERT INTO `programa` (`id_programa`, `programa`) VALUES
(1, 'Seguridad Ocupacional'),
(2, 'Ingenieria de Alimentos'),
(3, 'Ingenieria de Software'),
(4, 'Ingenieria Electrica'),
(5, 'Ingeieria Ambiental');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `rol` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `rol`) VALUES
(1, 'Administrador'),
(2, 'Empleado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('-gP6k7i5ZJHAhaUqiJVcICIx4xNLXE0U', 1655818470, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('-tTolX8qhiOqeqVAlevJCjeldQqLajNX', 1655864600, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('8rcai30DPqbNFFneUlN_tcBm4wrKrcaZ', 1655818496, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('BiL-NvXX2F50ESH_4w5GYSC06SB1_BsL', 1655829879, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('CtkQ6M8MpJYxw-FL54w08nJg-I9cKd4f', 1655818647, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('FI0Dv0BrJnGqBuqtllTh7GgPJb7XguNV', 1655818500, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('NpRB65LGHBs7ic8-s2eerMZCvPVeILFH', 1655818498, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('OSPSrbdJ0R4ieHbleGB6ApCyobIafGrv', 1655820259, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('ZA687rinGeGo4-ARdXYMeptwyYNVETm0', 1655818503, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('aALyYzHhPumItAiXDCzKcQLNvETCNsrU', 1655823440, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('aR5KSuG8J0zEXkzR1FnxctsnvwdFnosn', 1655821089, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('g9vVIOObUqV6imduLln-kuf0SlnMV-tB', 1655786140, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('kO6fI0iAgfbl4Wfr-kqKcAGM2wk4Ld81', 1655807384, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('kiWKLGCiLasYulzIPGT20KLoLpXBuYbb', 1655822304, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('mNRmrPPCCPwJjIjt0XpCNgvjI9gHPjEd', 1655818469, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('nJVdB4NamOu_HcR90Q6SPnDGrjSLjjPo', 1655786141, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('qKYUQILoV3VYnSra2f_GCKVH0hT2fe6P', 1655819184, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('v7cnrvQvPXgoh-GyuHBb1Swx8wBUQJKx', 1655864601, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('wLz-XMdZA9pLg2MJ-3WLCVa5C_l2Srq4', 1655807383, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('xXv32YGsvwCaaoROuJuiMe-SUYJ8DJuD', 1655824786, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('y0ZDS3EFEy6E5yInJ_PMulY9aFl9mPbk', 1655829632, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiempo`
--

CREATE TABLE `tiempo` (
  `id_tiempo` int(11) NOT NULL,
  `tiempo` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tiempo`
--

INSERT INTO `tiempo` (`id_tiempo`, `tiempo`) VALUES
(1, 'TC'),
(2, 'MT'),
(3, 'CAT 5'),
(4, 'CAT 8'),
(5, 'CAT 7'),
(6, 'CAT 8'),
(7, 'CAT 9'),
(8, 'CAT 10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_contrato`
--

CREATE TABLE `tipo_contrato` (
  `id_Contrato` int(11) NOT NULL,
  `Tipo_Contrato` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_contrato`
--

INSERT INTO `tipo_contrato` (`id_Contrato`, `Tipo_Contrato`) VALUES
(1, 'Tiempo completo'),
(2, 'Medio Tiempo'),
(3, 'T P '),
(4, 'CAT');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_empleado`
--

CREATE TABLE `tipo_empleado` (
  `id_Tipo_Emple` int(11) NOT NULL,
  `Area` varchar(30) NOT NULL,
  `Cargo` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `CC` int(11) NOT NULL,
  `id_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `password`, `CC`, `id_rol`) VALUES
(42, 'andres_garzonle@fet.edu.co', '$2a$10$Xe7soCWSNE7ogS0LtoSMBOc0qWRX9Pd7pN7HqchDkkwv4zUI4gB0q', 0, 1),
(47, 'william_gaviriara@fet.edu.co', '$2a$10$12Y8Fzqt993yF2KRqp7uaOyGBxMhUrwnnEh8duKujfybk.RPswRK6', 7733073, 2),
(48, 'daniela_huesoga@fet.edu.co', '$2a$10$XmwfSmSrEu1a3YzDvbdayuBi1Nj0Dgaw4w.cbmJ3u6Sxp2Xs69cau', 1075289057, 2),
(55, 'karla_gomezca@fet.edu.co', '$2a$10$eeVevWnjZ521WsByENPi7Oj7.TraoxYDeEj7hCvv.HIkweVWSth6q', 26422543, 2),
(58, 'john_serratoco@fet.edu.co', '$2a$10$33QmQbRx5lsMB.v8I2yjEOSgcashf9bKFydxqG1z4GUyISMupqe8e', 12265297, 2),
(59, 'jorge_henaogo@fet.edu.co', '$2a$10$kLjrwwqP0/GTCGLlDZmIn.a3eC8EOII8.S064fFYArGmSBSUJuBdS', 1080363128, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrativos`
--
ALTER TABLE `administrativos`
  ADD PRIMARY KEY (`id_Administrativos`);

--
-- Indices de la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD PRIMARY KEY (`id_Docentes`);

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id_empleado`);

--
-- Indices de la tabla `empleados_fet`
--
ALTER TABLE `empleados_fet`
  ADD PRIMARY KEY (`id_empleado_fet`);

--
-- Indices de la tabla `fecha_contrato`
--
ALTER TABLE `fecha_contrato`
  ADD PRIMARY KEY (`id_Inicio_Contrato`);

--
-- Indices de la tabla `labor`
--
ALTER TABLE `labor`
  ADD PRIMARY KEY (`id_labor`);

--
-- Indices de la tabla `lista_usuarios`
--
ALTER TABLE `lista_usuarios`
  ADD PRIMARY KEY (`id_lista_usuarios`);

--
-- Indices de la tabla `nivel_academico`
--
ALTER TABLE `nivel_academico`
  ADD PRIMARY KEY (`id_Nivel_Aca`);

--
-- Indices de la tabla `programa`
--
ALTER TABLE `programa`
  ADD PRIMARY KEY (`id_programa`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `tiempo`
--
ALTER TABLE `tiempo`
  ADD PRIMARY KEY (`id_tiempo`);

--
-- Indices de la tabla `tipo_contrato`
--
ALTER TABLE `tipo_contrato`
  ADD PRIMARY KEY (`id_Contrato`);

--
-- Indices de la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  ADD PRIMARY KEY (`id_Tipo_Emple`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrativos`
--
ALTER TABLE `administrativos`
  MODIFY `id_Administrativos` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `docentes`
--
ALTER TABLE `docentes`
  MODIFY `id_Docentes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `empleados_fet`
--
ALTER TABLE `empleados_fet`
  MODIFY `id_empleado_fet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `fecha_contrato`
--
ALTER TABLE `fecha_contrato`
  MODIFY `id_Inicio_Contrato` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `labor`
--
ALTER TABLE `labor`
  MODIFY `id_labor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `nivel_academico`
--
ALTER TABLE `nivel_academico`
  MODIFY `id_Nivel_Aca` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `programa`
--
ALTER TABLE `programa`
  MODIFY `id_programa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tiempo`
--
ALTER TABLE `tiempo`
  MODIFY `id_tiempo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tipo_contrato`
--
ALTER TABLE `tipo_contrato`
  MODIFY `id_Contrato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tipo_empleado`
--
ALTER TABLE `tipo_empleado`
  MODIFY `id_Tipo_Emple` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
