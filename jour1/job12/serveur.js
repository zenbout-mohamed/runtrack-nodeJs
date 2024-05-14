const http = require('http');
const fs = require('fs');
const path = require('path');

// Création du serveur
const server = http.createServer((req, res) => {
    // Chemin vers le fichier index.html
    const filePath = path.join(__dirname, 'index.html');

    // Lecture du fichier index.html
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // En cas d'erreur de lecture du fichier
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur interne du serveur');
        } else {
            // Envoi du contenu du fichier index.html
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Port du serveur
const PORT = 3000;

// Démarrage du serveur
server.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
