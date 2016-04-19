<?php
include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request =  (array) $request;


$tecnicoC =  $request['tecnico'];
$idTecnico = $request['idTecnico'];


if(isset($request['idTecnico'])){ //ACTUALIZAR
    
    $sql ="UPDATE tecnicos SET tecnico = '$tecnicoC' WHERE tecnicos.idTecnico = $idTecnico";
   
    $hecho = Database::ejecutar_idu($sql);
    
    if(is_numeric($hecho) OR $hecho == true){
        $respuesta = array('err'=>false, 'Mensaje'=>'Registro actualizado');
    }else{
        $respuesta = array('err'=>true, 'Mensaje'=>$hecho);
    }
    
}else{ //INSERTAR
    
    $sql = "INSERT INTO `tecnicos` (`tecnico`) VALUES ('$tecnicoC');";
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

