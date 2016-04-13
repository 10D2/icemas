<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idcliente, cliente FROM clientes1 ORDER BY cliente ASC';

$result = mysql_query($query);

$arrayClientes = array();

while ($row = mysql_fetch_array($result)) {
    $nomCliente = new stdClass();
    $nomCliente->idCliente = $row["idcliente"];
    $nomCliente->cliente = utf8_encode($row["cliente"]);
    $arrayClientes[] = $nomCliente;
}

# JSON-encode the response
echo $json_response = json_encode($arrayClientes);

        