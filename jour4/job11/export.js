const mongoose = require('mongoose');
const fs = require('fs');

// Modèles Mongoose
const Student = require('./models/student');  // Assurez-vous que les chemins sont corrects
const Year = require('./models/year');        // Assurez-vous que les chemins sont corrects

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/LaPlateforme', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('Connexion à la base de données réussie');

    try {
        // Récupérer toutes les données des collections 'students' et 'years'
        const students = await Student.find().populate('year_id').exec();
        const years = await Year.find().exec();

        // Préparer les données pour l'exportation
        const data = {
            students: students,
            years: years
        };

        // Convertir les données en JSON
        const jsonData = JSON.stringify(data, null, 2); // null et 2 pour une belle indentation

        // Écrire les données JSON dans un fichier
        fs.writeFileSync('exported_data.json', jsonData, 'utf-8');

        console.log('Données exportées avec succès dans le fichier exported_data.json');
    } catch (err) {
        console.error('Erreur lors de l\'exportation des données :', err);
    } finally {
        mongoose.connection.close();
    }
}).catch(err => {
    console.error('Erreur lors de la connexion à la base de données :', err);
});
