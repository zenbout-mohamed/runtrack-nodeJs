const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// DaNom de la Base de Donnée
const dbName = 'LaPlateforme';

// Création d'un nouveau MongoClient
const client = new MongoClient(url);

// Connexion avec le serveur
client.connect(function(err) {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connexion réussie à la base de données');

  const db = client.db(dbName);

  

  // Après avoir terminé, vous pouvez fermer la connexion
  client.close();
});
