const mongoose = require('mongoose');

// Définir le schéma pour les étudiants
const studentSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    year: { type: mongoose.Schema.Types.ObjectId, ref: 'Year' } // Référence à l'année/cursus associée à l'étudiant
});

// Créer le modèle "Student" à partir du schéma
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
