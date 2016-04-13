
<?php

include_once '../../../conexiones/class.Database.php';

$respuesta = Database::get_todo_paginado('clientes1');

echo json_encode($respuesta);

?>