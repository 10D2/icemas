<?php

session_start();
require_once("../conexion/class.Database.php");


$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$request = (array) $request;


$respuesta = array(
    'err' => true,
    'mensaje' => 'Usuario/Contraseña incorrectos',
);


// ================================================
//   Encriptar la contraseña maestra (UNICA VEZ)
// ================================================
// encriptar_usuario();




if (isset($request['usuario']) && isset($request['contrasena'])) { // ACTUALIZAR
    $user = addslashes($request['usuario']);
    $pass = addslashes($request['contrasena']);

    //$user = strtoupper($user);
    // Verificar que el usuario exista
    //$sql = "SELECT count(*) as existe FROM usuarios where usuario = '$user'";
    $sql = "SELECT count(*) as existe, p.idPerfil FROM usuarios INNER JOIN perfiles p ON p.idPerfil = usuarios.idPerfil where usuario = '$user'";
    $existe = Database::get_valor_query($sql, 'existe');


    if ($existe == 1) {

        // $sql = "SELECT contrasena FROM usuarios where usuario = '$user'";
        $sql = "SELECT contrasena FROM usuarios where usuario = '$user'";
        $data_pass = Database::get_valor_query($sql, 'contrasena');
        
        $sql1= "SELECT idPerfil FROM usuarios WHERE usuario = '$user'";
        $data_idPerfil = Database::get_valor_query($sql1, 'idPerfil');

        $sql2 = "SELECT idCliente FROM usuarios WHERE usuario ='$user'";
        $data_idCliente = Database::get_valor_query($sql2, 'idCliente');
        // Encriptar usando el mismo metodos
        //	$pass = Database::uncrypt( $pass, $data_pass );
        // Verificar que sean iguales las contraseñas

        
        
        if ($data_pass == $pass) {

            switch ($data_idPerfil) {
            case '1':
                $respuesta = array(
                    'err' => false,
                    'mensaje' => 'Login válido',
                    'url' => '../administracionSistema/index.php',
//                    'id'=>$data_cliente
                );
                break;

            case '2':
                $respuesta = array(
                    'err' => false,
                    'mensaje' => 'Login válido',
                    'url' => '../administracionClientes/index.php#/servicios/',
                    'idPerfil'=>$data_idPerfil,
                    'idCliente'=>$data_idCliente
                );
                break;

            case '3':
                $respuesta = array(
                    'err' => false,
                    'mensaje' => 'Login válido',
                    'url' => '../administracionTecnicos/index.php',
//                    'id'=>$data_cliente
                );
                break;
            
            case '4':
                $respuesta = array(
                    'err' => false,
                    'mensaje' => 'Login válido',
                    'url' => '../administracionSistema/index.php',
//                    'id'=>$data_cliente
                );
                break;
            
            default:
                echo "Hola";
                break;
        };

            $_SESSION['user'] = $user;

            // actualizar ultimo acceso
            $sql = "UPDATE usuarios set ultimoacceso = NOW() where usuario = '$user'";
            Database::ejecutar_idu($sql);
        }
    }
}


// sleep(1.5);
echo json_encode($respuesta);





// Esto se puede borrar despues
// ================================================
//   Funcion para Encriptar
// ================================================
// function encriptar_usuario(){
// 	$usuario_id = '1';
// 	$contrasena = '123456';
// 	$contrasena_crypt = Database::crypt( $contrasena );
// 	$sql = "UPDATE usuarios set contrasena = '$contrasena_crypt' where id = '$usuario_id'";
// 	Database::ejecutar_idu($sql);
// }
?>