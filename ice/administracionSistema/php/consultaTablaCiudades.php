
<?php
//
//include_once '../../../conexiones/class.Database.php';
//$nc = new Database();
//
//$query = 'SELECT idCiudad, ciudad FROM ciudades ORDER BY ciudad ASC';
//$result = $nc->get_json_rows($query);
//
//echo $json_response = $result;


include_once '../../../conexiones/class.Database.php';

if( isset( $_GET["pag"])){
    $pag = $_GET["pag"];
}else{
    $pag = 1;
}


$respuesta = Database::get_todo_paginado('ciudades', $pag);

echo json_encode($respuesta);
?>