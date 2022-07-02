const TasksService = require('../services/TasksService');

const creatTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newTask = await TasksService.createTask({ title, description });
    return res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

const getAllTasks = async (_req, res, next) => {
  try {
    const allTasks = await TasksService.getAllTasks();
    return res.status(200).json(allTasks);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await TasksService.getTaskById(id);
    return res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedTask = await TasksService.updateTask(body, id);
    return res.status(200).json(updatedTask);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await TasksService.deleteTask(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  creatTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
