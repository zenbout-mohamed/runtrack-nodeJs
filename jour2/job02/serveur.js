const express = require('express');
const routes = require('./routes');

const createServer = () => {
    const app = express();

    // Middleware pour traiter les requêtes JSON
    app.use(express.json());

    // Utilisation des routes définies dans routes.js
    app.use('/', routes);

    return app;
};

module.exports = createServer;
