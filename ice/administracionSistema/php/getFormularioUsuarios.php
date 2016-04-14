<?php

// Incluir la clase de base de datos
include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$error = "";

// Verificar que venga el parametro
if (!isset($_GET['c'])) {
    echo $error = "Falta el codigo";
    die;
}

// Desinfectar el parametro
$codigo = $_GET['c'];

$query = "SELECT u.idUsuario, u.usuario, u.contrasena, p.perfil, c.nombre FROM usuarios u INNER JOIN perfiles p ON p.idPerfil = u.idPerfil INNER JOIN clientes c ON c.idCliente= u.idCliente WHERE u.idUsuario ='$codigo'";

$result = mysql_query($query);

$arrayUsuario = array();

while ($row = mysql_fetch_array($result)) {
    $infoUsuario = new stdClass();
    $infoUsuario->idUsuario = $row["idUsuario"];
    $infoUsuario->usuario = utf8_encode($row["usuario"]);
    $infoUsuario->contrasena = utf8_encode($row["contrasena"]);
    $infoUsuario->perfil = utf8_encode($row["perfil"]);
    $infoUsuario->nombre = utf8_encode($row["nombre"]);
    
    $arrayUsuario[] = $infoUsuario;
    
}

echo $json_response = json_encode($infoUsuario);
?>