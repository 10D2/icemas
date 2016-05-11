<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;

$fechaInicio = $request['fechaInicio'];
//$fInicio = date("Y-m-d", $fechaInicio);
$folio = $request['folio'];
$descripcion = $request['descripcion'];
$proximo = $request['proximo'];
$refacciones = $request['refacciones'];
$idT = $request['idTipo'];
$idTe = $request['idTecnico'];
$ff = $request['fechaFinalizacion'];
$idE = $request['idEquipo'];
$idR = $request['realizado'];
$idC = $request['idCliente'];
$idServicio = $request['idServicio'];



if (isset($request['idServicio'])) { //ACTUALIZAR
    //   $sql = "UPDATE servicios SET fechaInicio='$fechaInicio', folio='$folio', descripcion='$descripcion', proximo='$proximo', refacciones='$refacciones', idTipo='$idT', idTecnico='$idTe', fechaFinalizacion='$ff', idEquipo='$idE', realizado='$idR', idCliente='$idC' WHERE servicios.idServicio=$idServicio";
    $sql = "UPDATE servicios SET fechaInicio='$fechaInicio', folio='$folio', descripcion='$descripcion', proximo='$proximo', refacciones='$refacciones', idTipo='$idT', idTecnico='$idTe', fechaFinalizacion='$ff', idEquipo='$idE', realizado='$idR', idCliente='$idC' WHERE servicios.idServicio=$idServicio";

    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }
} else { //INSERTAR
    $sql = "INSERT INTO servicios (fechaInicio, folio, descripcion, proximo, refacciones, idTipo, idTecnico, fechaFinalizacion, idEquipo, realizado, idCliente) VALUES ('$fechaInicio', '$folio', '$descripcion', '$proximo', '$refacciones', '$idT', '$idTe', '$ff', '$idE', '$idR', '$idC')";

    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }

    echo json_encode('INSERTAR');
}
echo json_encode($respuesta);
?>



