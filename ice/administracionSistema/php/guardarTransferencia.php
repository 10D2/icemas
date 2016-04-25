<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$idEquipo = $request['idEquipo'];
$idCliente = $request['idCliente'];
$fechaTrans = $request['fechaTransferencia'];
$idClienteNvo = $request['clienteNvo'];

$idCnvo = $idClienteNvo->idCliente;
//if (isset($request['idSucursal'])) { //ACTUALIZAR
//    $sql = "UPDATE transferencias SET idEquipo='3', idCliente='1', fechaTransferencia='2016-05-11', idClienteAnt='7' WHERE transferencias.idTransferencia=$idTransferencia";
//
//    $hecho = Database::ejecutar_idu($sql);
//
//    if (is_numeric($hecho) OR $hecho == true) {
//        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
//    } else {
//        $respuesta = array('err' => true, 'Mensaje' => $hecho);
//    }
//} else { //INSERTAR
$sql = "INSERT INTO transferencias (idEquipo, idCliente, fechaTransferencia, idClienteAnt) VALUES ('$idEquipo', '$idCliente', '$fechaTrans', '$idCnvo')";


$sql = "UPDATE equipos SET idCliente='$idCnvo' WHERE equipos.idEquipo= $idEquipo";

$hecho = Database::ejecutar_idu($sql);

if (is_numeric($hecho) OR $hecho == true) {
    $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
} else {
    $respuesta = array('err' => true, 'Mensaje' => $hecho);
}

echo json_encode('INSERTAR');

echo json_encode($respuesta);
?>

