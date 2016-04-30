<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$codigo = $_GET['c'];

$query = "SELECT idImagen,idServicio, nombreArchivo FROM archivospdf WHERE idServicio = '$codigo'";

$result = mysql_query($query);

$arrayDocPdf = array();

while ($row = mysql_fetch_array($result)) {
    $docPdf = new stdClass();
    $docPdf->idImagen = $row["idImagen"];
    $docPdf->idServicio = $row["idServicio"];
    $docPdf->nombreArchivo = utf8_encode($row["nombreArchivo"]);
    $arrayDocPdf[] = $docPdf;
}

//# JSON-encode the response
echo $json_response = json_encode($arrayDocPdf);
?>