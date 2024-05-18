const readline = require('readline');

// Créer une interface de lecture
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Supposons que vous avez un tableau d'objets représentant les étudiants
const students = [
    { id: 1, lastname: "Doe", firstname: "John" },
    { id: 2, lastname: "Smith", firstname: "Alice" },
    { id: 3, lastname: "Johnson", firstname: "Bob" }
];

// Fonction pour filtrer les étudiants ayant un numéro d'étudiant plus grand que celui saisi par l'utilisateur
function filterStudentsByStudentNumberGreaterThan(students, studentNumber) {
    return students.filter(student => student.id > studentNumber);
}

// Fonction pour afficher les étudiants filtrés en console
function displayFilteredStudents(filteredStudents) {
    if (filteredStudents.length === 0) {
        console.log("Aucun étudiant trouvé avec un numéro d'étudiant plus grand.");
    } else {
        console.log("Étudiants avec un numéro d'étudiant plus grand que celui saisi :");
        filteredStudents.forEach(student => {
            console.log(`${student.lastname} ${student.firstname} (ID: ${student.id})`);
        });
    }
}

// Demander à l'utilisateur de saisir un numéro d'étudiant
rl.question("Entrez un numéro d'étudiant : ", (studentNumberInput) => {
    const studentNumber = parseInt(studentNumberInput);

    // Vérifier si l'entrée de l'utilisateur est un nombre valide
    if (!isNaN(studentNumber)) {
        // Filtrer les étudiants ayant un numéro d'étudiant plus grand que celui saisi par l'utilisateur
        const filteredStudents = filterStudentsByStudentNumberGreaterThan(students, studentNumber);
        // Afficher les étudiants filtrés en console
        displayFilteredStudents(filteredStudents);
    } else {
        console.log("Veuillez saisir un numéro d'étudiant valide.");
    }

    // Fermer l'interface de lecture
    rl.close();
});
