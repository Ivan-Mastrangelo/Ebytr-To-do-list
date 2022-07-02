const { Task } = require('../DataBase/models');

const createTask = async ({ title, description }) => {
  const newTask = await Task.create({ title, description });
  return newTask;
};

const getAllTasks = async () => {
  const allTasks = await Task.findAll();
  return allTasks;
};

const getTaskById = async (id) => {
  const task = await Task.findByPk(id);
  return task;
};

const updateTask = async (body, id) => {
  const { title, description } = body;
  const updatedTask = await Task.update(
    { title, description },
    { where: { id } },
  );
  return updatedTask;
};

const deleteTask = async (id) => {
  await Task.destroy({ where: { id } });
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
