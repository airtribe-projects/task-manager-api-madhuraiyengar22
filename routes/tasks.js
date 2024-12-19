const express = require("express");
const router = express.Router();

const tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: 'Study Math',
        completed: true
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'Study Science',
        completed: true
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'Study Computers',
        completed: false
    }
];

// get all tasks
router.get("/api/v1/tasks", (req, res) => {
    res.send(tasks);
})

// get task by id
router.get("/api/v1/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id)
    if (!tasks[id - 1]) {
        return res.status(404).send({ message: "The task with given id was not found" });
    }
    res.send(tasks[id - 1]);
})

// create new task
router.post("/api/v1/tasks", (req, res) => {
    const { title, description, completed } = req.body;
    const id = tasks.length + 1; 
    const newTask = { id, title, description, completed };
    tasks.push(newTask);
    res.send(newTask);
})

// update an existing task by its id
router.put("/api/v1/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, completed } = req.body;

    if (!title || !description || typeof completed !== "boolean") {
        return res.status(400).json({ error: "Invalid request body" });
    }

    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).send({ error: `Task with ID ${id} not found` });
    }

    task.title = title;
    task.description = description;
    task.completed = completed;

    res.send(task);
});


// delete a task by its id
router.delete("/api/v1/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).send({ error: `Task with ID ${id} not found` });
    }
    tasks.splice(taskIndex, 1);
    res.send({ message: `Task with ID ${id} deleted` });
})

module.exports = router;