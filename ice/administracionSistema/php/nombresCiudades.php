
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idCiudad, ciudad FROM ciudades ORDER BY ciudad ASC';

$result = mysql_query($query);

$arrayCiudades = array();

while ($row = mysql_fetch_array($result)) {
    $nomCiudad = new stdClass();
    $nomCiudad->idCiudad = $row["idCiudad"];
    $nomCiudad->ciudad = utf8_encode($row["ciudad"]);
    $arrayCiudades[] = $nomCiudad;
}

# JSON-encode the response
echo $json_response = json_encode($arrayCiudades);

        