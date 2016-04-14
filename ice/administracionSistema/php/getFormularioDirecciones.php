infoDireccion
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

$query = "SELECT d.idDireccion, d.calle, d.numero, d.cruzamientos, d.colonia, d.codigoPostal, c.ciudad, l.nombre FROM direcciones d INNER JOIN ciudades c ON c.idCiudad=d.idCiudad INNER JOIN clientes l ON l.idCliente=d.idCliente WHERE d.idDireccion ='$codigo'";

$result = mysql_query($query);

$arrayDireccion = array();

while ($row = mysql_fetch_array($result)) {
    $infoDireccion = new stdClass();
    $infoDireccion->idDireccion = $row["idDireccion"];
    $infoDireccion->calle = utf8_encode($row["calle"]);
    $infoDireccion->numero = utf8_encode($row["numero"]);
    $infoDireccion->cruzamientos = utf8_encode($row["cruzamientos"]);
    $infoDireccion->colonia = utf8_encode($row["colonia"]);
    $infoDireccion->cP = $row["codigoPostal"];
    $infoDireccion->ciudad = utf8_encode($row["ciudad"]);
    $infoDireccion->nombre = utf8_encode($row["nombre"]);
    
    $arrayDireccion[] = $infoDireccion;
    
}

echo $json_response = json_encode($infoDireccion);
?>