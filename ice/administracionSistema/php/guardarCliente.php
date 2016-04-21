<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;

//echo var_dump($request);

$nombre = $request['nombre'];
$idCiudad = $request['eligeCd'];
$idSucursal = $request['elige'];
$direccion = $request['direccion'];
$telefono = $request['telefono'];
$contacto = $request['contacto'];
$correo = $request['correo'];

$idCliente = $request['idCliente'];

$idC = $idCiudad->idCiudad;
$idS = $idSucursal->idSucursal;

if (isset($request['idCliente'])) { //ACTUALIZAR
    $sql = "UPDATE clientes SET nombre='$nombre', idCiudad='$idC', idSucursal='$idS', direccion='$direccion', telefono='$telefono', contacto='$contacto', correo='$correo' WHERE clientes.idCliente=$idCliente";

    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }
} else { //INSERTAR
    $sql = "INSERT INTO clientes (nombre, idCiudad, idSucursal, direccion, telefono, contacto, correo) VALUES ('$nombre', '$idC', '$idS', '$direccion', '$telefono', '$contacto', '$correo')";
    
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

