<?php

// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$nombreC = utf8_decode($request['nombre']);
$idCiudad = $request['idCiudad'];
$idSucursal = $request['idSucursal'];
$direccionC = utf8_decode($request['direccion']);
$telefonoC = $request['telefono'];
$contactoC = utf8_decode($request['contacto']);
$correoC = utf8_decode($request['correo']);
$idCliente = $request['idCliente'];

$sql = "UPDATE clientes SET nombre = '$nombreC', idCiudad = '$idCiudad', idSucursal = '$idSucursal', direccion = '$direccionC', telefono = '$telefonoC', contacto = '$contactoC', correo = '$correoC' WHERE clientes.idCliente = $idCliente";

if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>