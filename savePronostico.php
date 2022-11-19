<?php

include 'cnn.php';
$buttonId = $_POST['buttonId'];
$correo = $_POST['correo'];


$correoLimpio = filter_var( $correo, FILTER_SANITIZE_EMAIL); 

    // Prepare
$stmt = $conexion->prepare("INSERT INTO resultados (correo, pronostico) VALUES (:correo, :pronostico)");

$stmt->bindParam(':correo', $correoLimpio);
$stmt->bindParam(':pronostico', $buttonId);
// Excecute
$stmt->execute();




?>