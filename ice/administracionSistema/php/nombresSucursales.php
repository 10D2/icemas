

<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

$query = 'SELECT idSucursal, sucursal FROM sucursales ORDER BY sucursal ASC';

$result = mysql_query($query);

$arraySucursal = array();

while ($row = mysql_fetch_array($result)) {
    $nomSucursal = new stdClass();
    $nomSucursal->idSucursal = $row["idSucursal"];
    $nomSucursal->sucursal = utf8_encode($row["sucursal"]);
    $arraySucursal[] = $nomSucursal;
}

# JSON-encode the response
echo $json_response = json_encode($arraySucursal);

        
