const http = require('http');
const fs = require('fs');
const path = require('path');

// Création du serveur
const server = http.createServer((req, res) => {
    // Récupération de l'URL demandée
    const url = req.url;

    // Détermination du chemin du fichier HTML en fonction de l'URL demandée
    let filePath = '';
    if (url === '/' || url === '/index.html') {
        filePath = path.join(__dirname, 'index.html');
    } else if (url === '/about' || url === '/about.html') {
        filePath = path.join(__dirname, 'about.html');
    } else {
        // Si l'URL n'est pas gérée, renvoyer une erreur 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page non trouvée');
        return;
    }

    // Lecture du fichier HTML correspondant
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // En cas d'erreur de lecture du fichier
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erreur interne du serveur');
        } else {
            // Envoi du contenu du fichier HTML
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Port du serveur
const PORT = 8888;

// Démarrage du serveur
server.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
