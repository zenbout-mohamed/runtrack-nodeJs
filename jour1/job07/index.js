const fs = require('fs');

// Chemin du fichier
const filePath = 'data2.txt';

// Lecture du contenu du fichier de manière synchrone
try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log("Contenu du fichier :", content);
} catch (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
}
