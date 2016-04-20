<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$calleC       = $request['calle'];
$numeroC      = $request['numero'];
$cruzamientos = $request['cruzamientos'];
$coloniaC     = $request['colonia'];
$codigo       = $request['codigoPostal'];
$idCiudad     = $request['ciudadSel'];
$idCliente    = $request['clienteSel'];
$idDireccion  = $request['idDireccion'];

$id  = $idCliente->idCliente;
$idC = $idCiudad->idCiudad;

if (isset($request['idDireccion'])) { //ACTUALIZAR
    $sql = "UPDATE direcciones SET calle='$calleC', numero = '$numeroC', cruzamientos = '$cruzamientos', colonia = '$coloniaC', codigoPostal = '$codigo', idCiudad = '$idC', idCliente = '$id',  WHERE direcciones.idDireccion = $idDireccion";

    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }
} else { //INSERTAR
    
    $sql = "INSERT INTO usuarios (usuario, contrasena, idPerfil, idCliente) VALUES ('$usuarioC', '$contrasenaC', '$idP', '$id')";    
    
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

