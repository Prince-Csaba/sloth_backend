const Task = require("../models/task.model");

const getTasksOfProject = async (req, res) => {
  const { id } = req.body.id;
  console.log(id);
  try {
    const tasks = await Task.find({ project: id });
    console.log(tasks);
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error finding project tasks:', error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getTasksOfProject };
