
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idTipo, tipo FROM tiposervicio ORDER BY tipo ASC';



$result = mysql_query($query);

$arrayTipoServ = array();

while ($row = mysql_fetch_array($result)) {
    $tipoServ = new stdClass();
    $tipoServ->idTipo = $row["idTipo"];
    $tipoServ->tipo = utf8_encode($row["tipo"]);
    
    $arrayTipoServ[] = $tipoServ;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTipoServ);

