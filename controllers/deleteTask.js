const Task = require('../models/task.model');

const deleteTask = async (req, res) => {
  try {
    const id = req.body.taskId;
    console.log('Delete Task ID:', id);
    const deletedTask = await Task.findOneAndDelete({ _id: id });

    if (!deletedTask) {
      return res.status(404).send({ message: 'Task not found' });
    }

    res.status(200).send({ message: 'Task deleted successfully', deletedTask });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(400).send({ error: error.message });
  }
};

module.exports = { deleteTask };
