
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idPerfil, perfil FROM perfiles ORDER BY perfil ASC';



$result = mysql_query($query);

$arrayPerfiles = array();

while ($row = mysql_fetch_array($result)) {
    $perfiles = new stdClass();
    $perfiles->idPerfil = $row["idPerfil"];
    $perfiles->perfil = utf8_encode($row["perfil"]);
    
    $arrayPerfiles[] = $perfiles;
}

# JSON-encode the response
echo $json_response = json_encode($arrayPerfiles);

