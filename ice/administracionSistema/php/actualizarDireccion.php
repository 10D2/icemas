<?php

// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$calleC = $request['calle'];
$numeroC = $request['numero'];
$cruzaC = $request['cruzamientos'];
$coloniaC = utf8_decode($request['colonia']);
$codigo = $request['codigoPostal'];
$idCiudad = $request['idCiudad'];
$idCliente = $request['idCliente'];
$idDireccion = $request['idDireccion'];


$sql = "UPDATE direcciones SET calle = '$calleC', numero = '$numeroC', cruzamientos = '$cruzaC', colonia = '$coloniaC', codigoPostal = '$codigo', idCiudad = '$idCiudad', idCliente = '$idCliente' WHERE direcciones.idDireccion = $idDireccion";

if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>