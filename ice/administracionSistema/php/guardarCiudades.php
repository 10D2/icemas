<?php
include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$ciudadC =  $request['ciudad'];
$idCiudad = $request['idCiudad'];


if(isset($request['idCiudad'])){ //ACTUALIZAR
    
    $sql ="UPDATE ciudades SET ciudad = '$ciudadC' WHERE ciudades.idCiudad = $idCiudad";
        
    $hecho = Database::ejecutar_idu($sql);
    
    if(is_numeric($hecho) OR $hecho == true){
        $respuesta = array('err'=>false, 'Mensaje'=>'Registro actualizado');
    }else{
        $respuesta = array('err'=>true, 'Mensaje'=>$hecho);
    }
    
}else{ //INSERTAR
    
    $sql = "INSERT INTO ciudades (ciudad) VALUES ('$ciudadC')";
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

