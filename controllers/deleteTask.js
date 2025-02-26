const Task = require('../models/task.model');

const createTask = async (req, res) => {
  try {
    console.log(req.body);
    const taskData = req.body;
    console.log(taskData);
    const newTask = new Task(taskData);
    console.log(newTask);
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.error('Error saving task:', error);
    res.status(400).send({ error: error.message });
  }
};

module.exports = { createTask };
