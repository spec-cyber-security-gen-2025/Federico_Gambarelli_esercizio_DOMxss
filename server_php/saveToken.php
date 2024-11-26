<?php
// Nome del file in cui salvare il token
$file = 'authTokens.txt';

// Controlla se il parametro authToken è presente nella richiesta GET
if (isset($_GET['authToken'])) {
    $authToken = $_GET['authToken'];

    // Aggiungi il token al file (in modalità append)
    $success = file_put_contents($file, $authToken . PHP_EOL, FILE_APPEND);

    if ($success) {
        echo 'Token salvato con successo!';
    } else {
        http_response_code(500);
        echo 'Errore durante il salvataggio del token.';
    }
} else {
    http_response_code(400);
    echo 'Token non fornito.';
}
