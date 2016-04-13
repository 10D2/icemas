<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idCliente, nombre FROM clientes ORDER BY nombre ASC';

$result = mysql_query($query);

$arrayClientes = array();

while ($row = mysql_fetch_array($result)) {
    $nomCliente = new stdClass();
    $nomCliente->idCliente = $row["idCliente"];
    $nomCliente->nombre = utf8_encode($row["nombre"]);
    $arrayClientes[] = $nomCliente;
}

# JSON-encode the response
echo $json_response = json_encode($arrayClientes);

        