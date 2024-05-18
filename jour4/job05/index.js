const mongoose = require('mongoose');
const Student = require('./models/student');
const Year = require('./models/year');

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connexion à la base de données réussie");

        // Requête pour récupérer tous les étudiants avec leur cursus
        return Student.find().populate('year').exec();
    })
    .then((students) => {
        // Afficher les étudiants avec leur cursus dans la console
        console.log("Liste des étudiants de La Plateforme avec leur cursus :");
        students.forEach((student) => {
            const year = student.year ? student.year.year : 'Non défini';
            console.log(`${student.firstname} ${student.lastname} - ${year}`);
        });
    
        // Fermer la connexion à la base de données
        mongoose.connection.close();
    })
    
    .catch((err) => {
        console.error("Erreur lors de la connexion à la base de données:", err);
    });






    
