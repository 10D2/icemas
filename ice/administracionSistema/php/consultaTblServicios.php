
<?php

include_once '../../../conexiones/conexion.php';
$cn = new conexion();
$cn->Conectarse();

//$query = 'SELECT idcliente,cliente,ciudad,sucursal,direccion,telefono,contacto FROM clientes1 ORDER BY cliente ASC';

$query = 'SELECT s.idServicio, s.fechaInicio, s.descripcion, s.proximo, s.refacciones, t.tipo, n.tecnico, s.fechaFinalizacion, s.numeroServicio, e.equipo, s.realizado, c.nombre FROM servicios s INNER JOIN tiposervicio t ON t.idTipo = s.idTipo INNER JOIN tecnicos n ON n.idTecnico= s.idTecnico INNER JOIN equipos e ON e.idEquipo = s.idEquipo INNER JOIN clientes c ON c.idCliente = s.idCliente ORDER BY s.fechaInicio DESC';

$result = mysql_query($query);

$arrayTblServ = array();

while ($row = mysql_fetch_array($result)) {
    $tblServicio = new stdClass();
    $tblServicio->idServicio = $row["idServicio"];
    $tblServicio->fechaInicio = $row["fechaInicio"];
    $tblServicio->descripcion = utf8_encode($row["descripcion"]);
    $tblServicio->proximo = $row["proximo"];
    $tblServicio->refacciones = utf8_encode($row["refacciones"]);
    $tblServicio->tipo = utf8_encode($row["tipo"]);
    $tblServicio->tecnico = utf8_encode($row["tecnico"]);
    $tblServicio->fFinal = $row["fechaFinalizacion"];
    $tblServicio->noServicio = $row["numeroServicio"];
    $tblServicio->equipo = utf8_encode($row["equipo"]);
    $tblServicio->realizado = $row["realizado"];
    $tblServicio->nombre = utf8_encode($row["nombre"]);
    $arrayTblServ[] = $tblServicio;
}

# JSON-encode the response
echo $json_response = json_encode($arrayTblServ);

