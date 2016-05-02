<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['idPerfil'];

$query = "SELECT idPerfil, perfil FROM perfiles WHERE idPerfil = '$codigo'";

$result = mysql_query($query);

$arrayPerfiles1 = array();

while ($row = mysql_fetch_array($result)) {
    $nomPerfil1 = new stdClass();
    $nomPerfil1->idPerfil = $row["idPerfil"];
    $nomPerfil1->perfil = utf8_encode($row["perfil"]);
    $arrayPerfiles1[] = $nomPerfil1;
}

# JSON-encode the response
echo $json_response = json_encode($arrayPerfiles1);

        