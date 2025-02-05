const Task = require('../models/task.model');

const createTask = async (req, res) => {
  try {
    const taskData = req.body.fetchData;
    //console.log(taskData);
    const newTask = new Task(taskData);
    console.log(newProject);
    await newTask.save();
    res.status(201).send(newTask);
  } catch (error) {
    console.error('Error saving task:', error);
    res.status(400).send({ error: error.message });
  }
};