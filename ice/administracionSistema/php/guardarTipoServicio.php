<?php
include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$tipoC =  $request['ciudad'];
$idTipo = $request['idTipo'];


if(isset($request['idTipo'])){ //ACTUALIZAR
    
    $sql ="UPDATE tiposervicio SET tipo = '$tipoC' WHERE tiposervicio.idTipo = $idTipo";
        
    $hecho = Database::ejecutar_idu($sql);
    
    if(is_numeric($hecho) OR $hecho == true){
        $respuesta = array('err'=>false, 'Mensaje'=>'Registro actualizado');
    }else{
        $respuesta = array('err'=>true, 'Mensaje'=>$hecho);
    }
    
}else{ //INSERTAR
    
    $sql = "INSERT INTO tiposervicio (tipo) VALUES ('$tipoC');";
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

