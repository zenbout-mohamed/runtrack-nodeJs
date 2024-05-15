const express = require('express');
const router = express.Router();
const data = require('./data.json');

// Middleware pour vérifier si une tâche existe
const checkTaskExists = (req, res, next) => {
    const taskId = req.params.id;
    const task = data.tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ message: "Tâche non trouvée" });
    }
    req.task = task;
    next();
};

// [GET] Récupérer toutes les tâches de la liste
router.get('/tasks', (req, res) => {
    res.json(data.tasks);
});

// [POST] Créer une nouvelle tâche
router.post('/tasks', (req, res) => {
    const newTask = req.body;
    data.tasks.push(newTask);
    // Enregistrer les modifications dans le fichier data.json (si nécessaire)
    // fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.status(201).json(newTask);
});

// [PUT] Mettre à jour une tâche existante
router.put('/tasks/:id', checkTaskExists, (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    const index = data.tasks.findIndex(task => task.id === taskId);
    data.tasks[index] = { ...data.tasks[index], ...updatedTask };
    // Enregistrer les modifications dans le fichier data.json (si nécessaire)
    // fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.json(data.tasks[index]);
});

// [DELETE] Supprimer une tâche existante
router.delete('/tasks/:id', checkTaskExists, (req, res) => {
    const taskId = req.params.id;
    const index = data.tasks.findIndex(task => task.id === taskId);
    data.tasks.splice(index, 1);
    // Enregistrer les modifications dans le fichier data.json (si nécessaire)
    // fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.json({ message: "Tâche supprimée avec succès" });
});

module.exports = router;
