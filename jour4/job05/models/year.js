const mongoose = require('mongoose');

// Définir le schéma pour les années/cursus
const yearSchema = new mongoose.Schema({
    year: String
});

// Créer le modèle "Year" à partir du schéma
const Year = mongoose.model('Year', yearSchema);

module.exports = Year;
