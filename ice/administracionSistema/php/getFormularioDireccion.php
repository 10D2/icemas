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

$query = "SELECT d.idDireccion, d.calle, d.numero, d.cruzamientos, d.colonia, d.codigoPostal, i.ciudad, c.nombre FROM direcciones d INNER JOIN ciudades i ON d.idCiudad = i.idCiudad INNER JOIN clientes c ON d.idCliente = c.idCliente WHERE d.idDireccion ='$codigo'";

$result = mysql_query($query);

$arrayDireccionForm = array();

while ($row = mysql_fetch_array($result)) {
    $infoDireccion = new stdClass();
    $infoDireccion->idDireccion = $row["idDireccion"];
    $infoDireccion->calle = $row["calle"];
    $infoDireccion->numero = $row["numero"];
    $infoDireccion->cruzamientos = $row["cruzamientos"];
    $infoDireccion->colonia = utf8_encode($row["colonia"]);
    $infoDireccion->codigoPostal = $row["codigoPostal"];
    $infoDireccion->ciudad = utf8_encode($row["ciudad"]);
    $infoDireccion->nombre = utf8_encode($row["nombre"]);
    
    $arrayDireccionForm[] = $infoDireccion;
    
}

echo $json_response = json_encode($infoDireccion);
?>