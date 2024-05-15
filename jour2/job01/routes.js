const express = require('express');
const router = express.Router();
const data = require('./data.json');

// Route pour obtenir toutes les tâches
router.get('/tasks', (req, res) => {
    res.json(data.tasks);
});

// Route pour obtenir une tâche par son ID
router.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const task = data.tasks.find(task => task.id === taskId);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: "Tâche non trouvée" });
    }
});

// Autres routes...

module.exports = router;
