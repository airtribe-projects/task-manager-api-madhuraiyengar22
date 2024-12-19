A simple RESTful API for managing tasks built with Node.js and Express.js.

Features

1. Retrieve all tasks (GET /tasks)
2. Retrieve a single task by ID (GET /tasks/:id)
3. Create new tasks (POST /tasks)
4. Update existing tasks (PUT /tasks/:id)
5. Delete tasks (DELETE /tasks/:id)

Requirements

1. Node.js (version 14 or higher)
2. Express.js

Installation


bash
git clone
cd node-task-api
npm install


Usage

1. Start the server: node app.js
2. API endpoints:
- GET /tasks: Retrieve all tasks
- GET /tasks/:id: Retrieve a single task by ID
- POST /tasks: Create a new task
- PUT /tasks/:id: Update an existing task
- DELETE /tasks/:id: Delete a task

API Request Body

For POST and PUT requests, the request body should be in JSON format with the following properties:

{
  "title": string,
  "description": string,
  "completed": boolean
}
