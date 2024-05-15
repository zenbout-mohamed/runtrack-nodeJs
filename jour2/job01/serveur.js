const express = require('express');
const routes = require('./routes');

const app = express();

// Middleware pour traiter les requêtes JSON
app.use(express.json());

// Utilisation des routes définies dans routes.js
app.use('/', routes);

module.exports = app;
