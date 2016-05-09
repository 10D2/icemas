<?php

include_once '../../../conexiones/class.Database.php';

$postdata = file_get_contents("php://input");

//$file = $_FILES["file"]["name"];


$request = json_decode($postdata);
$request = (array) $request;

$equipo = $request['equipo'];
$caracteristicas = $request['caracteristicas'];
$marca = $request['marca'];
$modelo = $request['modelo'];
$serie = $request['serie'];
$propietario = $request['propietario'];
$idC = $request['idCliente'];
$fecha = $request['fechaVenta'];
$idEquipo = $request['idEquipo'];

//$idC=$idCliente->idCliente;
//
//if (!is_dir("../archivos/"))
//    mkdir("../archivos/", 0777);
//
//if ($file && move_uploaded_file($_FILES["file"]["tmp_name"], "../archivos/" . $file)) {
//    echo $file;
//}
//
//$archivoC= "archivos/" . $file;

if (isset($request['idEquipo'])) { //ACTUALIZAR
    $sql = "UPDATE equipos SET equipo='$equipo', caracteristicas='$caracteristicas', marca='$marca', modelo='$modelo', serie='$serie', propietario='$propietario', idCliente='$idC', fechaVenta='$fecha' WHERE equipos.idEquipo= $idEquipo";


    $hecho = Database::ejecutar_idu($sql);

    if (is_numeric($hecho) OR $hecho == true) {
        $respuesta = array('err' => false, 'Mensaje' => 'Registro actualizado');
    } else {
        $respuesta = array('err' => true, 'Mensaje' => $hecho);
    }
} else { //INSERTAR
    $sql = "INSERT INTO equipos (equipo, caracteristicas, marca, modelo, serie, propietario, idCliente, fechaVenta) VALUES ('$equipo', '$caracteristicas', '$marca', '$modelo', '$serie', '$propietario', '$idC', '$fecha')";
 
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

