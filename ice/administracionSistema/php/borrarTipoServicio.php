<?php

include_once '../../../conexiones/class.Database.php';
$nc = new Database();

$id = $_GET["id"];

$sql = "DELETE FROM `tiposervicio` WHERE `tiposervicio`.`idTipo` = '$id'";

document.log($sql);

$result = $nc->ejecutar_idu($sql);


?>