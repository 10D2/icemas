
<?php
//
//include_once '../../../conexiones/conexion.php';
//$cn = new conexion();
//$cn->Conectarse();
//
//$query = 'SELECT idTipo, tipo FROM tiposervicio ORDER BY tipo ASC';
//
//
//
//$result = mysql_query($query);
//
//$arrayTipoServ = array();
//
//while ($row = mysql_fetch_array($result)) {
//    $tipoServ = new stdClass();
//    $tipoServ->idTipo = $row["idTipo"];
//    $tipoServ->tipo = utf8_encode($row["tipo"]);
//    
//    $arrayTipoServ[] = $tipoServ;
//}
//
//# JSON-encode the response
//echo $json_response = json_encode($arrayTipoServ);


include_once '../../../conexiones/class.Database.php';

if( isset( $_GET["pag"])){
    $pag = $_GET["pag"];
}else{
    $pag = 1;
}


$respuesta = Database::get_todo_paginado('tiposervicio', $pag);

echo json_encode($respuesta);
?>