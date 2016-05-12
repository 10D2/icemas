<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['c'];

//$query = "SELECT idEquipo,idImagen,nombreImagen FROM imagenes WHERE idImagen = '$codigo'";

$query = "SELECT i.idEquipo,i.idImagen,i.nombreImagen, e.equipo, e.marca, e.modelo ,e.serie FROM imagenes i 
INNER JOIN equipos e ON e.idEquipo = i.idEquipo WHERE i.idImagen ='$codigo'";

$result = mysql_query($query);

$arrayImagen = array();

while ($row = mysql_fetch_array($result)) {
    $imgEquipo = new stdClass();
    $imgEquipo->idEquipo = $row["idEquipo"];
    $imgEquipo->idImagen = $row["idImagen"];
    $imgEquipo->nombreImagen = utf8_encode($row["nombreImagen"]);
    $imgEquipo->equipo = utf8_encode($row["equipo"]);
    $imgEquipo->marca = utf8_encode($row["marca"]);
    $imgEquipo->modelo = utf8_encode($row["modelo"]);
    $imgEquipo->serie = utf8_encode($row["serie"]);
    $arrayImagen[] = $imgEquipo;
}

//# JSON-encode the response
echo $json_response = json_encode($imgEquipo);
?>