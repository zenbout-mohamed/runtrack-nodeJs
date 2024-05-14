const fs = require('fs');

// Chemin du fichier
const filePath = 'data.txt';

// Nouveau contenu
const newContent = "Je manipule les fichiers avec un module node !";

// Écriture du nouveau contenu dans le fichier
try {
    fs.writeFileSync(filePath, newContent);
    console.log("Le contenu du fichier a été modifié avec succès !");
} catch (err) {
    console.error("Erreur lors de la modification du fichier :", err);
}
