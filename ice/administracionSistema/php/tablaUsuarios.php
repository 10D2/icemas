
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT u.idUsuario, u.usuario, u.contrasena, p.perfil, c.nombre FROM usuarios u INNER JOIN perfiles p ON p.idPerfil = u.idPerfil INNER JOIN clientes c ON c.idCliente = u.idCliente ORDER BY c.nombre ASC';



$result = mysql_query($query);

$arrayUsuarios = array();

while ($row = mysql_fetch_array($result)) {
    $usuario = new stdClass();
    $usuario->idUsuario = $row["idUsuario"];
    $usuario->usuario = utf8_encode($row["usuario"]);
    $usuario->contrasena = utf8_encode($row["contrasena"]);
    $usuario->perfil = utf8_encode($row["perfil"]);
    $usuario->nombre = utf8_encode($row["nombre"]);
    
    $arrayUsuarios[] = $usuario;
}

# JSON-encode the response
echo $json_response = json_encode($arrayUsuarios);

