
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT d.idDireccion, d.calle, d.numero, d.cruzamientos, d.colonia, d.codigoPostal, c.ciudad, l.nombre FROM direcciones d INNER JOIN ciudades c ON c.idCiudad = d.idCiudad INNER JOIN clientes l ON l.idCliente= d.idCliente ORDER BY l.nombre ASC';

$result = mysql_query($query);

$arrayDireccion = array();

while ($row = mysql_fetch_array($result)) {
    $direccion = new stdClass();
    $direccion->idDireccion = $row["idDireccion"];
    $direccion->calle = $row["calle"];
    $direccion->numero = $row["numero"];
    $direccion->cruza = $row["cruzamientos"];
    $direccion->colonia = utf8_encode($row["colonia"]);
    $direccion->cp = $row["codigoPostal"];
    $direccion->ciudad = utf8_encode($row["ciudad"]);
    $direccion->nombre = utf8_encode($row["nombre"]);
    $arrayDireccion[] = $direccion;
}

# JSON-encode the response
echo $json_response = json_encode($arrayDireccion);

