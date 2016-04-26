<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idEquipo, equipo, caracteristicas, serie FROM equipos ORDER BY equipo ASC';

$result = mysql_query($query);

$arrayEquipos = array();

while ($row = mysql_fetch_array($result)) {
    $nomEquipo = new stdClass();
    $nomEquipo->idEquipo = $row["idEquipo"];
    $nomEquipo->equipo = utf8_encode($row["equipo"]);
    $nomEquipo->caracteristicas = utf8_encode($row["caracteristicas"]);
    $nomEquipo->serie = utf8_encode($row["serie"]);
    $arrayEquipos[] = $nomEquipo;
}

# JSON-encode the response
echo $json_response = json_encode($arrayEquipos);

        