<?php
// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$ciudadC = utf8_decode($request['ciudad']);



$sql = "INSERT INTO ciudades (ciudad) VALUES ('$ciudadC')";

if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>