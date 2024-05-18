const mongoose = require('mongoose');
const Student = require('./models/student');
const Year = require('./models/year');

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/LaPlateforme', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('Connexion à la base de données réussie');

    try {
        // Exemple de création de documents avec validation
        const year1 = new Year({ year: 'Bachelor 1' });
        const year2 = new Year({ year: 'Bachelor 2' });
        const year3 = new Year({ year: 'Bachelor 3' });

        await Promise.all([year1.save(), year2.save(), year3.save()]);

        const student1 = new Student({
            id: 1,
            lastname: 'LeBricoleur',
            firstname: 'Bob',
            students_number: 12345,
            year_id: year1._id
        });

        const student2 = new Student({
            id: 2,
            lastname: 'Doe',
            firstname: 'John',
            students_number: 12346,
            year_id: year2._id
        });

        const student3 = new Student({
            id: 3,
            lastname: 'Dupont',
            firstname: 'Marine',
            students_number: 12347,
            year_id: year3._id
        });

        await Promise.all([student1.save(), student2.save(), student3.save()]);

        console.log('Étudiants créés avec succès');
        
        // Requête pour récupérer tous les étudiants avec leur cursus
        const students = await Student.find().populate('year_id').exec();

        console.log('Liste des étudiants de La Plateforme avec leur cursus :');
        students.forEach(student => {
            if (student.year_id && student.year_id.year) {
                console.log(`${student.firstname} ${student.lastname} est en ${student.year_id.year}`);
            } else {
                console.log(`${student.firstname} ${student.lastname} n'a pas de cursus associé`);
            }
        });
    } catch (err) {
        console.error('Erreur :', err);
    } finally {
        mongoose.connection.close();
    }
}).catch(err => {
    console.error('Erreur lors de la connexion à la base de données :', err);
});
