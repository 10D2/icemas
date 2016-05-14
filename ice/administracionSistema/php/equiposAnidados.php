<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['c'];

$query = "SELECT idEquipo, equipo, caracteristicas, serie, idCliente FROM equipos WHERE idCliente = '$codigo' ORDER BY equipo ASC
";

$result = mysql_query($query);

$equiposAnidados = array();

while ($row = mysql_fetch_array($result)) {
    $anidaEquipo = new stdClass();
    $anidaEquipo->idEquipo = $row["idEquipo"];
    $anidaEquipo->equipo = utf8_encode($row["equipo"]);
    $anidaEquipo->caracteristicas = utf8_encode($row["caracteristicas"]);
    $anidaEquipo->serie = utf8_encode($row["serie"]);
    $anidaEquipo->idCliente = $row["idCliente"];
    $equiposAnidados[] = $anidaEquipo;
}

# JSON-encode the response
echo $json_response = json_encode($equiposAnidados);

        