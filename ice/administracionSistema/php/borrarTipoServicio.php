<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$id = $_GET["id"];

$sql = "DELETE FROM `tiposervicio` WHERE `tiposervicio`.`idTipo` = '$id'";

$datos = mysql_query($sql);

if($datos == false){
    echo mysql_error();
}
else{
    echo "Registro eliminado";
}

?>