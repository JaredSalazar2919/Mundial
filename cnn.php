<?php

$servidor = "localhost";
$usuario = "root";
$password = "";

try {
      $conexion = new PDO("mysql:host=$servidor;dbname=encuesta", $usuario, $password);      
      $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      echo "Conexión realizada Satisfactoriamente";
    }

catch(PDOException $e)
    {
    echo "La conexión ha fallado: " . $e->getMessage();
    }

?>