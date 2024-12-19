require('dotenv').config();
const express = require("express");
const app = express();

const taskRouter = require("./routes/tasks");

app.use(express.json());

const PORT = process.env.PORT || 3000;

const logger = (req, res, next) => {
    console.log(`${req.method} Request received on ${req.url}`);
    next();
}

app.use(logger);

app.use(taskRouter);

app.get("/", (req, res) => {
    res.send("Welcome to task manager!!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})