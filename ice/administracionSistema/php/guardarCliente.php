<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;

//echo var_dump($request);

$nombre = $request['nombre'];
$direccion = $request['direccion'];
$telefono = $request['telefono'];
$contacto = $request['contacto'];
$correo = $request['correo'];

$idCliente = $request['idCliente'];


if (isset($request['idCliente'])) { //ACTUALIZAR
    $sql = "UPDATE clientes SET nombre='$nombre', direccion='$direccion', telefono='$telefono', contacto='$contacto', correo='$correo' WHERE clientes.idCliente=$idCliente";

    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }
} else { //INSERTAR
    $sql = "INSERT INTO clientes (nombre, direccion, telefono, contacto, correo) VALUES ('$nombre', '$direccion', '$telefono', '$contacto', '$correo')";
    
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

