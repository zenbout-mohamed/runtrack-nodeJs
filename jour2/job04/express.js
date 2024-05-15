const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

// Exemple de données de tâches
let tasks = [
    { id: 1, task: "Faire les courses", done: false },
    { id: 2, task: "Nettoyer la maison", done: true },
    { id: 3, task: "Travailler sur le projet", done: false }
];

// Route pour obtenir toutes les tâches
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Route pour obtenir une tâche par ID
app.get('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: "Tâche non trouvée" });
    }
});

// Route pour ajouter une nouvelle tâche
app.post('/tasks', (req, res) => {
    const data = req.body;
    if (data.task) {
        const newTask = {
            id: tasks.length + 1,
            task: data.task,
            done: false
        };
        tasks.push(newTask);
        res.status(201).json(newTask);
    } else {
        res.status(400).json({ error: "Données de tâche manquantes" });
    }
});

// Route pour mettre à jour une tâche existante
app.put('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const data = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { ...tasks[taskIndex], ...data };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ error: "Tâche non trouvée" });
    }
});

// Route pour supprimer une tâche
app.delete('/tasks/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    tasks = tasks.filter(task => task.id !== taskId);
    res.status(204).send();
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
