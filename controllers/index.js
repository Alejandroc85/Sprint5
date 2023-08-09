const { knex } = require("../db");

//hola mundo
exports.helloWorld = async (req, res) => {
  res.json({ mensaje: "Hola Mundo" });
};
//traer tareas
exports.allTasks = async (req, res) => {
  const task = await knex.select("*").from("tarea");
  res.json({ task });
};
//traer usuarios
exports.allUsers = async (req, res) => {
  const users = await knex.select("*").from("usuario");
  res.status(200).json({ users });
};

//agregar tarea
exports.addTask = async (req, res) => {
  const newTask = req.body;
  await knex("tarea").insert(newTask);
  res.json({ mensaje: "Tarea Agregada" });
};

//actualizar tarea por ID

exports.changeTask = async (req, res) => {
  const taskId = Number(req.params.id);
  const modifyTask = req.body;
  const idCheck = await knex("tarea").where("id", taskId);
  const update = await knex("tarea").where("id", taskId).update(modifyTask);
  if (!idCheck) {
    return res.status(400).json({ error: "ID es requerido." });
  };
   if (update > 0) {
  res.json({ mensaje: "Tarea Actualizada" })}
  else {res.json({mensaje:"Ta todo mal amigo"})};
};

// Crear una ruta que obtenga todas las tareas según el id del usuario

exports.newRoutes = async (req,res) => {
const idUsuario = Number(req.params.id);
const idTask = await knex.select("titulo", "completado").from("tarea").where("usuario_id", idUsuario);
res.json({ idTask });

}