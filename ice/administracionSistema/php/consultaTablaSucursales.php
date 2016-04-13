
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT s.idSucursal,s.sucursal, c.nombre, c.idCliente FROM sucursales s INNER JOIN clientes c ON s.idCliente = c.idCliente ORDER BY sucursal ASC';

//$query = 'SELECT idsucursal,sucursal FROM sucursales ORDER BY sucursal ASC';


$result = mysql_query($query);

$arrayTablaSuc = array();

while ($row = mysql_fetch_array($result)) {
    $tablaSuc = new stdClass();
    $tablaSuc->idSucursal = $row["idSucursal"];
    $tablaSuc->sucursal = utf8_encode($row["sucursal"]);
    $tablaSuc->nombre = utf8_encode($row["nombre"]);
    $tablaSuc->idCliente = $row["idCliente"];
    $arrayTablaSuc[] = $tablaSuc;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTablaSuc);

