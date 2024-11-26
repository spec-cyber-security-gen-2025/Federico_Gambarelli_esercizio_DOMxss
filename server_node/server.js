const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Endpoint per ricevere il token
app.get('/saveToken', (req, res) => {
    const authToken = req.query.authToken; // Ottieni il parametro dalla query string

    if (authToken) {
        // Salva il token nel file in modalità append
        fs.appendFile('authTokens.txt', authToken + '\n', (err) => {
            if (err) {
                console.error('Errore durante il salvataggio del token:', err);
                res.status(500).send('Errore durante il salvataggio del token.');
            } else {
                console.log('Token salvato:', authToken);
                res.send('Token salvato con successo!');
            }
        });
    } else {
        res.status(400).send('Token non fornito.');
    }
});

// Avvia il server
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
