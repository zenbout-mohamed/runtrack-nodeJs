const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
    // Définition du code de statut et des en-têtes HTTP
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Envoi de la réponse "Hello World!"
    res.end('Hello World !\n');
});

// Écoute du serveur sur le port 8888
const PORT = 8888;
server.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
