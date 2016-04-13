<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

//$query = 'SELECT idcliente,cliente,ciudad,sucursal,direccion,telefono,contacto FROM clientes1 ORDER BY cliente ASC';

$query = 'SELECT c.idCliente, c.nombre, a.ciudad, s.sucursal, d.direccion ,c.telefono, c.contacto, c.correo, u.usuario FROM clientes c INNER JOIN ciudades a ON a.idCiudad = c.idCiudad INNER JOIN sucursales s ON s.idSucursal = c.idSucursal INNER JOIN direcciones d ON d.idDireccion = c.idDireccion INNER JOIN usuarios u ON u.idUsuario = c.idUsuario ORDER BY c.nombre ASC';


$result = mysql_query($query);

$arrayTablaCliente = array();

while ($row = mysql_fetch_array($result)) {
    $tblCliente = new stdClass();
    $tblCliente->idCliente = $row["idCliente"];
    $tblCliente->nombre = utf8_encode($row["nombre"]);
    $tblCliente->ciudad = utf8_encode($row["ciudad"]);
    $tblCliente->sucursal = utf8_encode($row["sucursal"]);
    $tblCliente->direccion = utf8_encode($row["direccion"]);
    $tblCliente->telefono = $row["telefono"];
    $tblCliente->contacto = utf8_encode($row["contacto"]);
    $tblCliente->correo = utf8_encode($row["correo"]);
    $tblCliente->usuario = utf8_encode($row["usuario"]);
    $arrayTablaCliente[] = $tblCliente;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTablaCliente);

