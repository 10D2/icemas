<?php
include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$perfilC =  $request['perfil'];
$idPerfil = $request['idPerfil'];


if(isset($request['idPerfil'])){ //ACTUALIZAR
    
    $sql ="UPDATE perfiles SET perfil = '$perfilC' WHERE perfiles.idPerfil = $idPerfil";
   
    $hecho = Database::ejecutar_idu($sql);
    
    if(is_numeric($hecho) OR $hecho == true){
        $respuesta = array('err'=>false, 'Mensaje'=>'Registro actualizado');
    }else{
        $respuesta = array('err'=>true, 'Mensaje'=>$hecho);
    }
    
}else{ //INSERTAR
    
    $sql = "INSERT INTO perfiles (perfil) VALUES ('$perfilC')";
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

