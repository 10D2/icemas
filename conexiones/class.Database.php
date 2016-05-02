<?php

// ======================================================
// Clase: class.Database.php
// Funcion: Se encarga del manejo con la base de datos
// Descripcion: Tiene varias funciones muy útiles para
// 				el manejo de registros.
// 				
// Ultima Modificación: 17 de marzo de 2015
// ======================================================


class Database {

    private $_connection;
    private $_host = "localhost";
    private $_user = "root";
    private $_pass = "";
    private $_db = "webicemas";
    // Almacenar una unica instancia
    private static $_instancia;

    // ================================================
    // Metodo para obtener instancia de base de datos
    // ================================================
    public static function getInstancia() {

        if (!isset(self::$_instancia)) {
            self::$_instancia = new self;
        }


        return self::$_instancia;
    }

    // ================================================
    // Constructor de la clase Base de datos
    // ================================================
    public function __construct() {
        $this->_connection = new mysqli($this->_host, $this->_user, $this->_pass, $this->_db);

        // Manejar error en base de datos
        if (mysqli_connect_error()) {
            trigger_error('Falla en la conexion de base de datos' . mysqli_connect_error(), E_USER_ERROR);
        }
    }

    // Metodo vacio __close para evitar duplicacion
    private function __close() {
        
    }

    // Metodo para obtener la conexion a la base de datos
    public function getConnection() {
        $this->_connection->set_charset("utf8");
        return $this->_connection;
    }

    // Metodo que revisa el String SQL
    private function es_string($sql) {
        if (!is_string($sql)) {
            trigger_error('class.Database.inc: $SQL enviado no es un string: ' . $sql);
            return false;
        }
        return true;
    }

    // ==================================================
    // 	Funcion que ejecuta el SQL y retorna un ROW
    // 		Esta funcion esta pensada para SQLs, 
    // 		que retornen unicamente UNA sola línea
    // ==================================================
    public static function get_row($sql) {

        if (!self::es_string($sql))
            exit();

        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();
        $resultado = $mysqli->query($sql);

        if ($row = $resultado->fetch_assoc()) {
            return $row;
        } else {
            return array();
        }
    }

    // ==================================================
    // 	Funcion que ejecuta el SQL y retorna un CURSOR
    // 		Esta funcion esta pensada para SQLs, 
    // 		que retornen multiples lineas (1 o varias)
    // ==================================================
    public static function get_cursor($sql) {

        if (!self::es_string($sql))
            exit();


        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();

        $resultado = $mysqli->query($sql);
        return $resultado; // Este resultado se puede usar así:  while ($row = $resultado->fetch_assoc()){...}
    }

    // ==================================================
    // 	Funcion que ejecuta el SQL y retorna un jSon
    // 	data: [{...}] con N cantidad de registros
    // ==================================================
    public static function get_json_rows($sql) {

        if (!self::es_string($sql))
            exit();

        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();


        $resultado = $mysqli->query($sql);


        // Si hay un error en el SQL, este es el error de MySQL
        if (!$resultado) {
            return "class.Database.class: error " . $mysqli->error;
        }

        $i = 0;
        $registros = array();

        while ($row = $resultado->fetch_assoc()) {
            array_push($registros, $row);
            // $registros[$i]= $row;
            // $i++;
        };
        return json_encode($registros);
    }

    // ==================================================
    // 	Funcion que ejecuta el SQL y retorna un Arreglo
    // ==================================================
    public static function get_arreglo($sql) {

        if (!self::es_string($sql))
            exit();

        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();


        $resultado = $mysqli->query($sql);


        // Si hay un error en el SQL, este es el error de MySQL
        if (!$resultado) {
            return "class.Database.class: error " . $mysqli->error;
        }

        $i = 0;
        $registros = array();

        while ($row = $resultado->fetch_assoc()) {
            array_push($registros, $row);
        };
        return $registros;
    }

    // ==================================================
    // 	Funcion que ejecuta el SQL y retorna un jSon
    // 	de una sola linea. Ideal para imprimir un
    // 	Query que solo retorne una linea
    // ==================================================
    public static function get_json_row($sql) {

        if (!self::es_string($sql))
            exit();

        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();

        $resultado = $mysqli->query($sql);

        // Si hay un error en el SQL, este es el error de MySQL
        if (!$resultado) {
            return "class.Database.class: error " . $mysqli->error;
        }


        if (!$row = $resultado->fetch_assoc()) {
            return "{}";
        }
        return json_encode($row);
    }

    // ====================================================================
    // 	Funcion que ejecuta el SQL y retorna un valor
    // 	Ideal para count(*), Sum, cosas que retornen una fila y una columna
    // ====================================================================
    public static function get_valor_query($sql, $columna) {

        if (!self::es_string($sql, $columna))
            exit();

        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();

        $resultado = $mysqli->query($sql);

        // Si hay un error en el SQL, este es el error de MySQL
        if (!$resultado) {
            return "class.Database.class: error " . $mysqli->error;
        }

        $Valor = NULL;
        //Trae el primer valor del arreglo
        if ($row = $resultado->fetch_assoc()) {
            // $Valor = array_values($row)[0];
            $Valor = $row[$columna];
        }

        return $Valor;
    }

    // ====================================================================
    // 	Funcion que ejecuta el SQL de inserción, actualización y eliminación
    // ====================================================================
    public static function ejecutar_idu($sql) {

        if (!self::es_string($sql))
            exit();

        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();

        if (!$resultado = $mysqli->query($sql)) {
            return "class.Database.class: error " . $mysqli->error;
        } else {
            return $resultado;
        }



        return $resultado;
    }

    // ====================================================================
    // 	Funciones para encryptar y desencryptar data: 
    // 		crypt_blowfish_bydinvaders
    // ====================================================================
    function crypt($aEncryptar, $digito = 7) {
        $set_salt = './1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        $salt = sprintf('$2a$%02d$', $digito);
        for ($i = 0; $i < 22; $i++) {
            $salt .= $set_salt[mt_rand(0, 22)];
        }
        return crypt($aEncryptar, $salt);
    }

    function uncrypt($Evaluar, $Contra) {

        if (crypt($Evaluar, $Contra) == $Contra)
            return true;
        else
            return false;
    }

    // ================================================
    //   Funcion que pagina cualquier TABLA
    // ================================================
    Public static function get_todo_paginado($tabla, $pagina = 1, $por_pagina = 5) {

        // Core de la funcion
        $db = DataBase::getInstancia();
        $mysqli = $db->getConnection();

        //

        $sql = "SELECT  count(*) as cuantos  from $tabla";


        $cuantos = Database::get_valor_query($sql, 'cuantos');
        $total_paginas = ceil($cuantos / $por_pagina);

        if ($pagina > $total_paginas) {
            $pagina = $total_paginas;
        }


        $pagina -= 1;  // 0
        $desde = $pagina * $por_pagina; // 0 * 20 = 0

        if ($pagina >= $total_paginas - 1) {
            $pag_siguiente = 1;
        } else {
            $pag_siguiente = $pagina + 2;
        }

        if ($pagina < 1) {
            $pag_anterior = $total_paginas;
        } else {
            $pag_anterior = $pagina;
        }




        //$sql = "SELECT * from $tabla limit $desde, $por_pagina";//

        switch ($tabla) {
            case 'ciudades':
                $sql = "SELECT * from $tabla ORDER BY ciudad ASC ";
                break;
            case 'sucursales':
                $sql = "SELECT s.idSucursal,s.sucursal, i.ciudad, i.idCiudad  ,c.nombre, c.idCliente FROM sucursales s INNER JOIN ciudades i ON i.idCiudad = s.idCiudad INNER JOIN clientes c ON s.idCliente = c.idCliente ORDER BY sucursal ASC ";
                break;
            case 'tecnicos':
                $sql = "SELECT * from $tabla ORDER BY tecnico ASC";
                break;
            case 'perfiles':
                $sql = "SELECT * from $tabla ORDER BY perfil ASC";
                break;
            case 'usuarios':
                $sql = "SELECT u.idUsuario, u.usuario, u.contrasena, p.perfil, c.nombre FROM usuarios u INNER JOIN perfiles p ON p.idPerfil = u.idPerfil INNER JOIN clientes c ON c.idCliente = u.idCliente ORDER BY c.nombre ASC ";
                break;
            case 'tiposervicio':
                $sql = "SELECT * from $tabla ORDER BY tipo ASC";
                break;
            case 'clientes':
                $sql = "SELECT idCliente, nombre, direccion, telefono, contacto, correo FROM clientes ORDER BY nombre ASC";
                break;
            case 'equipos':
                $sql = "SELECT e.idEquipo, e.equipo,e.caracteristicas ,e.marca, e.modelo, e.serie, e.propietario, c.nombre, e.fechaVenta FROM equipos e INNER JOIN clientes c ON c.idCliente = e.idCliente ORDER BY c.nombre ASC ";
                break;
            case 'servicios':
                $sql = "SELECT s.idServicio, s.fechaInicio, s.folio, s.descripcion, s.proximo, s.refacciones, t.tipo, 
c.tecnico, s.fechaFinalizacion, e.equipo, e.serie , s.realizado, l.nombre, p.nombreArchivo 
FROM servicios s 
LEFT JOIN tiposervicio t ON t.idTipo = s.idTipo 
LEFT JOIN tecnicos c ON c.idTecnico = s.idTecnico 
LEFT JOIN equipos e ON e.idEquipo = s.idEquipo 
LEFT JOIN archivospdf p ON p.idServicio = s.idServicio
LEFT JOIN clientes l ON l.idCliente = s.idCliente ORDER BY s.folio ASC";
//                $sql = "SELECT s.idServicio, s.fechaInicio, s.folio, s.descripcion, s.proximo, s.refacciones, t.tipo, c.tecnico, s.fechaFinalizacion, e.equipo, e.serie , s.realizado, l.nombre FROM servicios s INNER JOIN tiposervicio t ON t.idTipo = s.idTipo INNER JOIN tecnicos c ON c.idTecnico = s.idTecnico INNER JOIN equipos e ON e.idEquipo = s.idEquipo INNER JOIN clientes l ON l.idCliente = s.idCliente ORDER BY s.folio ASC";
                break;
            case 'transferencias':
//                $sql = "SELECT t.idTransferencia, e.equipo, e.serie ,c.nombre, t.fechaTransferencia, (SELECT nombre FROM clientes WHERE idClienteAnt=c.idCliente) as nombre1 FROM transferencias t"
//                    . " INNER JOIN equipos e ON e.idEquipo = t.idEquipo "
//                    . "INNER JOIN clientes c ON c.idCliente = t.idCliente "
//                    
//                    . "ORDER BY t.fechaTransferencia "
//                    . "DESC limit $desde, $por_pagina";
//                break;
                $sql = "SELECT t.idTransferencia, e.equipo, e.serie ,c.nombre, t.fechaTransferencia, c1.nombre as nombre1 FROM transferencias t INNER JOIN equipos e ON e.idEquipo = t.idEquipo INNER JOIN clientes c ON c.idCliente = t.idCliente INNER JOIN clientes c1 ON c1.idCliente = t.idClienteAnt ORDER BY t.fechaTransferencia DESC  ";
                break;
            default:
                echo "Hola";
                break;
        }

        $datos = Database::get_arreglo($sql);

        $resultado = $mysqli->query($sql);

        $arrPaginas = array();
        for ($i = 0; $i < $total_paginas; $i++) {
            array_push($arrPaginas, $i + 1);
        }


        $respuesta = array(
            'err' => false,
            'conteo' => $cuantos,
            $tabla => $datos,
            'pag_actual' => ($pagina + 1),
            'pag_siguiente' => $pag_siguiente,
            'pag_anterior' => $pag_anterior,
            'total_paginas' => $total_paginas,
            'paginas' => $arrPaginas
        );


        return $respuesta;
    }

}

?>