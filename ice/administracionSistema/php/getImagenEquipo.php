<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['c'];

$query = "SELECT idEquipo,imagen FROM equipos WHERE idEquipo = '$codigo'";

$result = mysql_query($query);

$arrayImagen = array();

while ($row = mysql_fetch_array($result)) {
    $imgEquipo = new stdClass();
    $imgEquipo->idEquipo = $row["idEquipo"];
    $imgEquipo->imagen = utf8_encode($row["imagen"]);
    $arrayImagen[] = $imgEquipo;
}

//# JSON-encode the response
echo $json_response = json_encode($arrayImagen);
?>