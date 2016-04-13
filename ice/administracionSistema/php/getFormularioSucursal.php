<?php

// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
    echo $error = "Falta el codigo";
    die;
}

// Desinfectar el parametro
$codigo = $_GET['c'];

$query = "SELECT s.idSucursal,s.sucursal, c.nombre, c.idCliente FROM sucursales s INNER JOIN clientes c ON s.idCliente = c.idCliente WHERE s.idSucursal ='$codigo'";

$result = mysql_query($query);

$arraySuc = array();

while ($row = mysql_fetch_array($result)) {
    $infoSuc = new stdClass();
    $infoSuc->idSucursal = $row["idSucursal"];
    $infoSuc->sucursal = utf8_encode($row["sucursal"]);
    $infoSuc->nombre = utf8_encode($row["nombre"]);
    $infoSuc->idCliente = $row["idCliente"];
    
    $arraySuc[] = $infoSuc;
    
}

echo $json_response = json_encode($infoSuc);
?>