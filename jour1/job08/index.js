const fs = require('fs');

// Chemin du fichier
const filePath = 'data.txt';

// Lecture du contenu du fichier de manière synchrone
try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Affichage une lettre sur deux
    let everyOtherLetter = "";
    for (let i = 0; i < content.length; i += 2) {
        everyOtherLetter += content[i];
    }

    console.log("Contenu du fichier (une lettre sur deux) :", everyOtherLetter);
} catch (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
}
