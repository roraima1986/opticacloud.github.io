<?php 

$destino = "contacto@opticacloud.net";
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$pais = $_POST["pais"];
$asunto = $_POST["asunto"];
$mensaje = $_POST["mensaje"];

$contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\nPaís: " . $pais . "\nMensaje: " . $mensaje;

mail($destino, $asunto, $contenido);

?>