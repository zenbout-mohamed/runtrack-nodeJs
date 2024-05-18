const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Définir le schéma pour les années/cursus
const yearSchema = new Schema({
    year: String
});

// Créer le modèle "Year" à partir du schéma
const Year = mongoose.model('Year', yearSchema);

// Définir le schéma pour les étudiants
const studentSchema = new Schema({
    firstname: String,
    lastname: String,
    year: { type: Schema.Types.ObjectId, ref: 'Year' } // Référence à l'année/cursus associée à l'étudiant
});

// Créer le modèle "Student" à partir du schéma
const Student = mongoose.model('Student', studentSchema);

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/LaPlateforme', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connexion à la base de données réussie");

        // Création des années/cursus
        const bachelor1 = new Year({ year: 'Bachelor 1' });
        const bachelor2 = new Year({ year: 'Bachelor 2' });
        const bachelor3 = new Year({ year: 'Bachelor 3' });

        // Enregistrer les années/cursus dans la base de données
        return Promise.all([bachelor1.save(), bachelor2.save(), bachelor3.save()]);
    })
    .then((years) => {
        console.log("Les années/cursus ont été enregistrées avec succès");

        // Création des étudiants avec leur cursus associé
        const bob = new Student({ firstname: 'Bob', lastname: 'LeBricoleur', year: years[0]._id });
        const john = new Student({ firstname: 'John', lastname: 'Doe', year: years[1]._id });
        const marine = new Student({ firstname: 'Marine', lastname: 'Dupont', year: years[2]._id });

        // Enregistrer les étudiants dans la base de données
        return Promise.all([bob.save(), john.save(), marine.save()]);
    })
    .then(() => {
        console.log("Les étudiants ont été enregistrés avec succès");
    })
    .catch((err) => {
        console.error("Erreur lors de la connexion à la base de données:", err);
    });
