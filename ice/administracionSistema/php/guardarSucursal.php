<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$sucursalC = $request['sucursal'];
$idC = $request['seleccionado'];
$idSucursal = $request['idSucursal'];


//foreach ($idC as $clave => $valor) {
//     if($clave=='idCliente'){
//         $id=$valor;
//     }
//}


$id=$idC->idCliente;
if (isset($request['idSucursal'])) { //ACTUALIZAR
    $sql = "UPDATE sucursales SET sucursal='$sucursalC', idCliente = '$id' WHERE sucursales.idSucursal = $idSucursal";

    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }
} else { //INSERTAR
    $sql = "INSERT INTO sucursales (sucursal, idCliente) VALUES ('$sucursalC', '$id')";
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

