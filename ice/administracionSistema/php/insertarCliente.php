<?php
// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$nombreC = utf8_decode($request['nombre']);
$idCiudadC= $request['idCiudad'];
$idSucursalC= $request['idSucursal'];
$direccionC= $request['direccion'];
$telefonoC= $request['telefono'];
$contactoC = utf8_decode($request['contacto']);
$correoC = utf8_decode($request['correo']);

$sql = "INSERT INTO clientes (nombre, idCiudad, idSucursal, direccion, telefono, contacto, correo) VALUES ('$nombreC', '$idCiudadC', '$idSucursalC', '$direccionC', '$telefonoC', '$contactoC', '$correoC')";


if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>