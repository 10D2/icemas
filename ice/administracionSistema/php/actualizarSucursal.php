<?php

// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$sucursalC = utf8_decode($request['sucursal']);
$idC = $request['idCliente'];
$idsucursal = $request['idSucursal'];


$sql = "UPDATE sucursales SET sucursal='$sucursalC', idCliente = '$idC' WHERE sucursales.idSucursal = $idsucursal";

if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>