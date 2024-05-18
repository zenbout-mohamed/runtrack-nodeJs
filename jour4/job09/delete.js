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

    // Assurez-vous d'utiliser un ID valide pour l'étudiant à supprimer
    const studentIdToDelete = "1"; // Remplacez par un ObjectID valide de votre base de données

    // Vérifier si l'ID est un ObjectID valide
    if (!ObjectID.isValid(studentIdToDelete)) {
        console.error('L\'ID fourni n\'est pas un ObjectID valide');
        client.close();
        return;
    }

    // Supprimer un étudiant en fonction de son ID
    db.collection('students').deleteOne(
        { _id: new ObjectID(studentIdToDelete) },
        (err, result) => {
            if (err) {
                console.error('Erreur lors de la suppression de l\'étudiant :', err);
                client.close();
                return;
            }

            if (result.deletedCount === 0) {
                console.log('Aucun étudiant trouvé avec l\'ID fourni');
            } else {
                console.log('Étudiant supprimé avec succès');
            }

            // Fermer la connexion au client
            client.close();
        }
    );
});

