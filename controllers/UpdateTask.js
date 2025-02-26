const Task = require('../models/task.model');

const updateTask = async (req, res) => {
  try {
    const { taskId, updateData } = req.body;

    // Find the task by ID and update it with the new data
    const updatedTask = await Task.findByIdAndUpdate(taskId, updateData, { new: true });

    if (!updatedTask) {
      return res.status(404).send({ message: 'Task not found' });
    }

    res.status(200).send(updatedTask);
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(400).send({ error: error.message });
  }
};

module.exports = { updateTask };
