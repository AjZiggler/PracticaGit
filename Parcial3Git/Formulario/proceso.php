<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nom"];
    $email = $_POST["ema"];
    $mensaje = $_POST["men"];

    // Aquí puedes realizar cualquier procesamiento adicional con los datos recibidos
    // Por ejemplo, enviar un correo electrónico, almacenar en una base de datos, etc.

    // En este ejemplo, solo mostraremos los datos recibidos
    echo "Nombre: " . $nombre . "<br>";
    echo "Correo Electrónico: " . $email . "<br>";
    echo "Mensaje: " . $mensaje . "<br>";
}
?>
