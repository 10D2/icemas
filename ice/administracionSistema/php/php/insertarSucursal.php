<?php
// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;




$sucursalC = utf8_decode($request['sucursal']);
$idC= $request['idCliente'];

echo "<br /".$idC;
echo "<br /".$sucursalC;


$sql = "INSERT INTO sucursales (sucursal, idCliente) VALUES ('$sucursalC', '$idC')";

if (mysql_query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: ";
}
?>