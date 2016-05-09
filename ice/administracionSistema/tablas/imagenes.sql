-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 09-03-2016 a las 13:20:12
-- Versión del servidor: 5.5.45-cll-lve
-- Versión de PHP: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `bdnews`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

CREATE TABLE IF NOT EXISTS `imagenes` (
  `idImagen` int(5) NOT NULL AUTO_INCREMENT,
  `idNoticias` int(5) NOT NULL,
  `rutas` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`idImagen`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=173 ;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`idImagen`, `idNoticias`, `rutas`) VALUES
(166, 922, '../images/_20131107_094443.jpg'),
(167, 922, '../images/_20140207_092649.jpg'),
(168, 922, '../images/_BPTTPRORCVPWOSH.jpg'),
(169, 922, 'images/_DSC3657.JPG'),
(170, 861, 'images/Chrysanthemum'),
(171, 861, 'images/Hydrangeas.jpg'),
(172, 861, 'images/Koala.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
