<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idTecnico, tecnico FROM tecnicos ORDER BY tecnico ASC';

$result = mysql_query($query);

$arrayTecnicos = array();

while ($row = mysql_fetch_array($result)) {
    $nomTecnicos = new stdClass();
    $nomTecnicos->idTecnico = $row["idTecnico"];
    $nomTecnicos->tecnico = utf8_encode($row["tecnico"]);
    $arrayTecnicos[] = $nomTecnicos;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTecnicos);

        
