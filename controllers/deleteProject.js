const Project = require('../models/project.model');
const Task = require('../models/task.model');

const deleteProject = async (req, res) => {
  try {
    const projectId = req.body.projectId;
    console.log('Delete Project ID:', req.body.projectId);

    // Delete all tasks attached to this project
    await Task.deleteMany({ project: projectId });

    // Delete the project itself
    const deletedProject = await Project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).send({ message: 'Project not found' });
    }

    res.status(200).send({ message: 'Project and related tasks deleted successfully', deletedProject });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(400).send({ error: error.message });
  }
};

module.exports = { deleteProject };