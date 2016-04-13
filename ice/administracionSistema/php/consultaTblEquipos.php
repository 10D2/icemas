<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT e.idEquipo, e.equipo,e.caracteristicas ,e.marca, e.modelo, e.serie, e.propietario, c.nombre, e.fechaVenta FROM equipos e INNER JOIN clientes c ON c.idCliente = e.idCliente ORDER BY fechaVenta DESC';

$result = mysql_query($query);

$arrayTblEquipo = array();

while ($row = mysql_fetch_array($result)) {
    $tblEquipo = new stdClass();
    $tblEquipo->idEquipo = $row["idEquipo"];
    $tblEquipo->equipo = utf8_encode($row["equipo"]);
    $tblEquipo->cara = utf8_encode($row["caracteristicas"]);
    $tblEquipo->marca = utf8_encode($row["marca"]);
    $tblEquipo->modelo = utf8_encode($row["modelo"]);
    $tblEquipo->serie = utf8_encode($row["serie"]);
    $tblEquipo->propietario = utf8_encode($row["propietario"]);
    $tblEquipo->nombre = utf8_encode($row["nombre"]);
    $tblEquipo->fventa = $row["fechaVenta"];
    $arrayTblEquipo[] = $tblEquipo;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTblEquipo);

