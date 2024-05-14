const fs = require('fs');

// Lecture du répertoire courant
fs.readdir('.', (err, files) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire :", err);
        return;
    }

    // Filtrer les dossiers parmi les fichiers obtenus
    const folders = files.filter(file => fs.statSync(file).isDirectory());

    // Affichage des dossiers dans le terminal
    console.log("Dossiers présents dans le répertoire courant :");
    folders.forEach(folder => console.log(folder));
});
