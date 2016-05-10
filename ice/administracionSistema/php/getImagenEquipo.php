<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['c'];

$query = "SELECT idEquipo,idImagen,nombreImagen FROM imagenes WHERE idEquipo = '$codigo'";

$result = mysql_query($query);

$arrayImagen = array();

while ($row = mysql_fetch_array($result)) {
    $imgEquipo = new stdClass();
    $imgEquipo->idEquipo = $row["idEquipo"];
    $imgEquipo->idImagen = $row["idImagen"];
    $imgEquipo->nombreImagen = utf8_encode($row["nombreImagen"]);
    $arrayImagen[] = $imgEquipo;
}

//# JSON-encode the response
echo $json_response = json_encode($arrayImagen);
?>