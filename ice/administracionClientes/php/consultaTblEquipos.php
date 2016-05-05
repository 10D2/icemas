<?php
session_start();
include_once '../../../conexiones/class.Database.php';
$nc = new Database();


$codigo = $_SESSION['idCli'];

$query = "SELECT e.idEquipo, e.equipo,e.caracteristicas ,e.marca, e.modelo, e.serie, e.propietario, c.idCliente, 
e.fechaVenta FROM equipos e INNER JOIN clientes c ON c.idCliente = e.idCliente 
WHERE c.idCliente = '$codigo' ORDER BY e.equipo ASC";
$result = $nc->get_json_rows($query);

echo $json_response = $result;
?>