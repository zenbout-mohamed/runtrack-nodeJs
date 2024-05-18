const readline = require('readline');

// Créer une interface de lecture
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Supposons que vous avez un tableau d'objets représentant les étudiants
const students = [
    { id: 1, lastname: "Doe", firstname: "John", age: 25, major: "Computer Science" },
    { id: 2, lastname: "Smith", firstname: "Alice", age: 22, major: "Engineering" },
    { id: 3, lastname: "Johnson", firstname: "Bob", age: 24, major: "Mathematics" }
];

// Fonction pour récupérer les informations d'un étudiant à partir d'un nom de famille
function getStudentInfoByLastName(students, lastName) {
    return students.find(student => student.lastname.toLowerCase() === lastName.toLowerCase());
}

// Fonction pour afficher les informations de l'étudiant en console
function displayStudentInfo(student) {
    if (student) {
        console.log("Informations de l'étudiant :");
        console.log(`Nom : ${student.lastname}`);
        console.log(`Prénom : ${student.firstname}`);
        console.log(`Âge : ${student.age}`);
        console.log(`Majeure : ${student.major}`);
    } else {
        console.log("Aucun étudiant trouvé avec ce nom de famille.");
    }
}

// Demander à l'utilisateur de saisir un nom de famille
rl.question("Entrez un nom de famille : ", (lastNameInput) => {
    const student = getStudentInfoByLastName(students, lastNameInput);

    // Afficher les informations de l'étudiant en console
    displayStudentInfo(student);

    // Fermer l'interface de lecture
    rl.close();
});
