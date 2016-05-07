<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;

$valor = $request->usuario;
$usuarioC = $request['usuario'];
$contrasenaC = $request['contrasena'];
$idP = $request['idPerfil'];
$id = $request['idCliente'];
$idUsuario = $request['idUsuario'];

//$id = $idC->idCliente;
//$idP = $idPerfil->idPerfil;

if (isset($request['idUsuario'])) { //ACTUALIZAR
    $sql = "UPDATE usuarios SET usuario='$usuarioC', contrasena = '$contrasenaC', idPerfil = '$idP', idCliente = '$id'  WHERE usuarios.idUsuario = $idUsuario";

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