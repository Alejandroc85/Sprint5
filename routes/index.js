const express = require("express");
const routes = express.Router();
const { helloWorld, allUsers, allTasks, addTask, changeTask, newRoutes } = require("../controllers");

//Retornar un mensaje de Hola Mundo
routes.get("/world", helloWorld);

//Traer a los usuarios
routes.get("/users", allUsers );

//Traer las tareas
routes.get("/tasks", allTasks);

// Agregar una tarea
routes.post("/newtask", addTask);

//Modificar una tarea

routes.put("/modtask/:id", changeTask);


//obtener tareas por id

routes.get("/newRoutes/:id", newRoutes)

module.exports = routes;
