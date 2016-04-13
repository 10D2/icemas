<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

//$query = 'SELECT idcliente,cliente,ciudad,sucursal,direccion,telefono,contacto FROM clientes1 ORDER BY cliente ASC';

$query = 'SELECT t.idTransferencia, e.equipo, e.serie , c.nombre, t.fechaTransferencia FROM transferencias t INNER JOIN equipos e ON t.idEquipo = e.idEquipo INNER JOIN clientes c ON c.idCliente = t.idCliente ORDER BY fechaTransferencia DESC';

$result = mysql_query($query);

$arrayTrans = array();

while ($row = mysql_fetch_array($result)) {
    $tblCTrans = new stdClass();
    $tblCTrans->idTransferencia = $row["idTransferencia"];
    $tblCTrans->equipo = utf8_encode($row["equipo"]);
    $tblCTrans->serie = utf8_encode($row["serie"]);
    $tblCTrans->nombre = utf8_encode($row["nombre"]);
    $tblCTrans->fTrans = $row["fechaTransferencia"];

    $arrayTrans[] = $tblCTrans;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTrans);

