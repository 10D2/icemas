<?php

session_start();
include_once '../../../conexiones/class.Database.php';
$nc = new Database();


$codigo = $_SESSION['idCli'];

$query = "SELECT s.idServicio, s.fechaInicio, s.folio, s.descripcion, s.proximo, s.refacciones, t.tipo, 
c.tecnico, s.fechaFinalizacion, e.equipo, e.serie , s.realizado, l.idCliente 
FROM servicios s 
INNER JOIN tiposervicio t ON t.idTipo = s.idTipo 
INNER JOIN tecnicos c ON c.idTecnico = s.idTecnico 
INNER JOIN equipos e ON e.idEquipo = s.idEquipo 
INNER JOIN archivospdf p ON p.idServicio = s.idServicio
INNER JOIN clientes l ON l.idCliente = s.idCliente WHERE l.idCliente = '$codigo' ORDER BY s.folio ASC";
$result = $nc->get_json_rows($query);

echo $json_response = $result;
?>
