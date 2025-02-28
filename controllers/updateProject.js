const Project = require('../models/project.model');

const updateProject = async (req, res) => {
  try {
    const { projectId, updateData } = req.body;

    // Find the project by ID and update it with the new data
    const updatedProject = await Project.findByIdAndUpdate(projectId, updateData, { new: true });

    if (!updatedProject) {
      return res.status(404).send({ message: 'Project not found' });
    }

    res.status(200).send(updatedProject);
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(400).send({ error: error.message });
  }
};

module.exports = { updateProject };