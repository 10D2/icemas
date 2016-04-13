
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idCiudad, ciudad FROM ciudades ORDER BY ciudad ASC';



$result = mysql_query($query);

$arrayTablaCd = array();

while ($row = mysql_fetch_array($result)) {
    $tablaCd = new stdClass();
    $tablaCd->idCiudad = $row["idCiudad"];
    $tablaCd->ciudad = utf8_encode($row["ciudad"]);
    
    $arrayTablaCd[] = $tablaCd;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTablaCd);

