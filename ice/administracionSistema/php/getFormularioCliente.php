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

//$query = "SELECT c.idCliente, c.nombre, i.ciudad, s.sucursal, c.direccion, c.telefono, c.contacto, c.correo FROM clientes c INNER JOIN ciudades i ON i.idCiudad = c.idCiudad INNER JOIN sucursales s ON s.idSucursal= c.idSucursal WHERE c.idCliente ='$codigo'";

$query = "SELECT c.idCliente, c.nombre, i.ciudad, s.sucursal, d.idDireccion, d.calle, d.numero, d.cruzamientos, d.colonia, d.codigoPostal, c.telefono, c.contacto, c.correo FROM clientes c INNER JOIN ciudades i ON i.idCiudad = c.idCiudad INNER JOIN sucursales s ON s.idSucursal= c.idSucursal INNER JOIN direcciones d ON d.idDireccion = c.idDireccion WHERE c.idCliente ='$codigo'";


$result = mysql_query($query);

$arrayCliente = array();

while ($row = mysql_fetch_array($result)) {
    $infoCliente = new stdClass();
    $infoCliente->idCliente = $row["idCliente"];
    $infoCliente->nombre = utf8_encode($row["nombre"]);
    $infoCliente->ciudad = utf8_encode($row["ciudad"]);
    $infoCliente->sucursal = utf8_encode($row["sucursal"]);
    $infoCliente->idDireccion = $row["idDireccion"];
    $infoCliente->calle = $row["calle"];
    $infoCliente->numero = $row["numero"];
    $infoCliente->cruzamientos = $row["cruzamientos"];
    $infoCliente->colonia = utf8_encode($row["colonia"]);
    $infoCliente->codigoPostal = $row["codigoPostal"];
    $infoCliente->telefono = $row["telefono"];
    $infoCliente->contacto = utf8_encode($row["contacto"]);
    $infoCliente->correo = utf8_encode($row["correo"]);

    $arrayCliente[] = $infoCliente;
}

echo $json_response = json_encode($infoCliente);
?>