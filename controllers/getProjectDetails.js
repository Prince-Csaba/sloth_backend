const Project = require('../models/project.model');

const getProjectDetails = async (req, res) => {
  const { projectId } = req.body;
  if (!projectId) {
    return res.status(400).json({ error: 'projectId is required' });
  }
  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({
      name: project.name,
      description: project.description,
      status: project.status,
      // add other fields if needed
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { getProjectDetails };