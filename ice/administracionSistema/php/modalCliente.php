<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

//$query = 'SELECT idcliente,cliente,ciudad,sucursal,direccion,telefono,contacto FROM clientes1 ORDER BY cliente ASC';

$query = 'SELECT c.idCliente, c.nombre, a.ciudad, s.sucursal, c.direccion ,c.telefono, c.contacto, c.correo FROM clientes c INNER JOIN ciudades a ON a.idCiudad = c.idCiudad INNER JOIN sucursales s ON s.idSucursal = c.idSucursal ORDER BY c.nombre ASC';


$result = mysql_query($query);

$arrayClienteM = array();

while ($row = mysql_fetch_array($result)) {
    $cliente = new stdClass();
    $cliente->idCliente = $row["idCliente"];
    $cliente->nombre = utf8_encode($row["nombre"]);
    $cliente->ciudad = utf8_encode($row["ciudad"]);
    $cliente->sucursal = utf8_encode($row["sucursal"]);
    $cliente->direccion = utf8_encode($row["direccion"]);
    $cliente->telefono = $row["telefono"];
    $cliente->contacto = utf8_encode($row["contacto"]);
    $cliente->correo = utf8_encode($row["correo"]);
    $arrayClienteM[] = $cliente;
}

# JSON-encode the response
echo $json_response = json_encode($cliente);



