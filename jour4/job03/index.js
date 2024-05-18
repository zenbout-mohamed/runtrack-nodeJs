const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définir le schéma pour les étudiants
const studentSchema = new Schema({
    firstname: String,
    lastname: String
});

// Créer le modèle "Student" à partir du schéma
const Student = mongoose.model('Student', studentSchema);

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connexion à la base de données réussie");

        // Création des étudiants
        const bob = new Student({ firstname: 'Bob', lastname: 'LeBricoleur' });
        const john = new Student({ firstname: 'John', lastname: 'Doe' });
        const marine = new Student({ firstname: 'Marine', lastname: 'Dupont' });

        // Enregistrer les étudiants dans la base de données
        return Promise.all([bob.save(), john.save(), marine.save()]);
    })
    .then(() => {
        console.log("Les étudiants ont été enregistrés avec succès");
    })
    .catch((err) => {
        console.error("Erreur lors de la connexion à la base de données:", err);
    });
