const Task = require('../models/task.model');

const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Extract task ID from the URL
    const updateData = req.body.updateData; // Get the updated fields from the request body

    console.log('Update Task ID:', id);
    console.log('Update Data:', updateData);

    // Find the task by ID and update it with the new data
    const updatedTask = await Task.findOneAndUpdate({ someid: id }, updateData, { new: true });

    console.log('Updated Task:', updatedTask);

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
