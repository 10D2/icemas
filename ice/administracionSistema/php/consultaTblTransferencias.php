
<?php

include_once '../../../conexiones/class.Database.php';

if( isset( $_GET["pag"])){
    $pag = $_GET["pag"];
}else{
    $pag = 1;
}


$respuesta = Database::get_todo_paginado('transferencias', $pag);

echo json_encode($respuesta);
?>

