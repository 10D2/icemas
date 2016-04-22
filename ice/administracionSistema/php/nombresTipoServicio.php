<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idTipo, tipo FROM tiposervicio ORDER BY tipo ASC';

$result = mysql_query($query);

$arrayTservicio = array();

while ($row = mysql_fetch_array($result)) {
    $nomTservicio = new stdClass();
    $nomTservicio->idTipo = $row["idTipo"];
    $nomTservicio->tipo = utf8_encode($row["tipo"]);
    $arrayTservicio[] = $nomTservicio;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTservicio);

        
