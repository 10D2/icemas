
<?php
//
//include_once '../../../conexiones/conexion.php';
//$cn = new conexion();
//$cn->Conectarse();
//
//$query = 'SELECT idTecnico, tecnico FROM tecnicos ORDER BY tecnico ASC
//';
//
//
//
//$result = mysql_query($query);
//
//$arrayTablatnico = array();
//
//while ($row = mysql_fetch_array($result)) {
//    $tblTecnico = new stdClass();
//    $tblTecnico->idTecnico = $row["idTecnico"];
//    $tblTecnico->tecnico = utf8_encode($row["tecnico"]);
//    
//    $arrayTablatnico[] = $tblTecnico;
//}
//
//# JSON-encode the response
//echo $json_response = json_encode($arrayTablatnico);

include_once '../../../conexiones/class.Database.php';

if( isset( $_GET["pag"])){
    $pag = $_GET["pag"];
}else{
    $pag = 1;
}


$respuesta = Database::get_todo_paginado('tecnicos', $pag);

echo json_encode($respuesta);
?>

