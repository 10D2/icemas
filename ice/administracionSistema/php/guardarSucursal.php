<?php
include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$sucursalC =  $request['sucursal'];
$idC = $request['idCliente'];
$idsucursal = $request['idSucursal'];


if(isset($request['idCiudad'])){ //ACTUALIZAR
    
    $sql = "UPDATE sucursales SET sucursal='$sucursalC', idCliente = '$idC' WHERE sucursales.idSucursal = $idsucursal";
    
    $hecho = Database::ejecutar_idu($sql);
    
    if(is_numeric($hecho) OR $hecho == true){
        $respuesta = array('err'=>false, 'Mensaje'=>'Registro actualizado');
    }else{
        $respuesta = array('err'=>true, 'Mensaje'=>$hecho);
    }
    
}else{ //INSERTAR
    
    $sql = "INSERT INTO sucursales (sucursal, idCliente) VALUES ('$sucursalC', '$idC')";
    $hecho = Database::ejecutar_idu($sql);
    
    if(is_numeric($hecho) OR $hecho == true){
        $respuesta = array('err'=>false, 'Mensaje'=>'Registro actualizado');
    }else{
        $respuesta = array('err'=>true, 'Mensaje'=>$hecho);
    }
    
    echo json_encode('INSERTAR');
    
}
echo json_encode($respuesta);

?>

