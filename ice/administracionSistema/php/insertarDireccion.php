<?php
// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$calleC= $request['calle'];
$numeroC= $request['numero'];
$cruzaC= $request['cruzamientos'];
$coloniaC = utf8_decode($request['colonia']);
$cpC= $request['codigoPostal'];
$idCiudad= $request['idCiudad'];
$idCliente= $request['idCliente'];

$sql = "INSERT INTO direcciones (calle, numero, cruzamientos, colonia, codigoPostal, idCiudad, idCliente) VALUES ('$calleC', '$numeroC', '$cruzaC', '$coloniaC', '$cpC', '$idCiudad', '$idCliente')";


if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>