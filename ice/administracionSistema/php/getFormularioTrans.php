<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['c'];

$query = "SELECT e.idEquipo, e.equipo, c.idCliente ,c.nombre FROM equipos e INNER JOIN clientes c ON c.idCliente = e.idCliente WHERE e.idEquipo = '$codigo'";

$result = mysql_query($query);

$arrayTransferencias = array();

while ($row = mysql_fetch_array($result)) {
    $infoTrans = new stdClass();
    $infoTrans->idEquipo = $row["idEquipo"];
    $infoTrans->equipo = utf8_encode($row["equipo"]);
    $infoTrans->idCliente = $row["idCliente"];
    $infoTrans->nombre = utf8_encode($row["nombre"]);
    $arrayTransferencias[] = $infoTrans;
}

//# JSON-encode the response
echo $json_response = json_encode($infoTrans);
?>