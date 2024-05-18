// Importer le module MongoDB
const { MongoClient, ObjectID } = require('mongodb');

// Connexion à la base de données
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données :', err);
        return;
    }

    console.log('Connexion à la base de données réussie');

    // Sélectionner la base de données
    const db = client.db('LaPlateforme');

    // Supposons que vous ayez un ID d'étudiant et un nouveau cursus
    const studentIdToUpdate = "1";
    const newCurriculum = "Bachelor";

    // Mise à jour du cursus de l'étudiant en fonction de son ID
    db.collection('students').updateOne(
        { _id: ObjectID(studentIdToUpdate) },
        { $set: { cursus: newCurriculum } },
        (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour du cursus de l\'étudiant :', err);
                return;
            }

            console.log('Cursus de l\'étudiant mis à jour avec succès');
        }
    );
});
