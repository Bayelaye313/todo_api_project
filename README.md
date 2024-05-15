#Todo API Project

This project contains a backend server for a Todo API using MySQL as the database. 
The server runs on `localhost` port `3000`.

**Installation**
To run the server locally, follow these steps:
Clone this repository:
git clone `(https://github.com/Bayelaye313/todo_api_project.git)` 

Navigate to the project directory:
cd todo_api_project

- Install dependencies:
- npm install

## Usage
To start the server, run the following command:
npm run serve

The server will start running on `(http://localhost:3000)` .

##Database
- Ensure you have MySQL installed and running locally on your machine.

The database configuration for the server can be found in src/DataSource.ts. 
Modify the database connection settings as needed for your MySQL setup.

##API Base URL
The base URL for accessing the Todo API is:
(http://localhost:3000)

##Endpoints
GET /todos: Get all todos.
POST /todos: Create a new todo.
PATCH /todos/:id: Update a todo by ID.
DELETE /todos/:id: Delete a todo by ID.

##Technologies Used
###backend:
Node.js
Express.js
MySQL
TypeORM

###Frontend:
Angular
cd to App and run s