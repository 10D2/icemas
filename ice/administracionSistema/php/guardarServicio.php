<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$fechaInicio = $request['fechaInicio'];
$folio = $request['folio'];
$descripcion = $request['descripcion'];
$proximo = $request['proximo'];
$refacciones = $request['refacciones'];
$idTipo = $request['tipoSel'];
$idTecnico = $request['tecnicoSel'];
$ff = $request['fechaFinalizacion'];
$idEquipo = $request['equipoSel'];
$realizado = $request['selecSiNo'];
$idCliente = $request['nombreSel'];
$idServicio = $request['idServicio'];

$idT  = $idTipo->idTipo;
$idTe = $idTecnico->idTecnico;
$idE  = $idEquipo->idEquipo;
$idC  = $idCliente->idCliente;
$idR  = $realizado->id;

if (isset($request['idServicio'])) { //ACTUALIZAR
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

