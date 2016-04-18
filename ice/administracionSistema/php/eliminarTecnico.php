<?php

//include_once '../../../conexiones/conexion.php';
//$cn = new conexion();
//$cn->Conectarse();
//
//$id = $_GET["id"];
//
//$sql = "DELETE FROM `tecnicos` WHERE `tecnicos`.`idTecnico` = '$id'";
//
//$datos = mysql_query($sql);
//
//if($datos == false){
//    echo mysql_error();
//}
//else{
//    echo "Registro eliminado";
//}
include_once '../../../conexiones/class.Database.php';
$nc = new Database();

$id = $_GET["id"];

$sql = "DELETE FROM `tecnicos` WHERE `tecnicos`.`idTecnico` = '$id'";

document.log($sql);

$result = $nc->ejecutar_idu($sql);



