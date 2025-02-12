const Project = require('../models/project.model');

const updateProject = async (req, res) => {
  try {
    const projectID = req.body.fetchData;
    //console.log(projectData);
    const newProject = new Project(projectData);
    console.log(newProject);
    await newProject.save();
    res.status(201).send(newProject);
  } catch (error) {
    console.error('Error saving project:', error);
    res.status(400).send({ error: error.message });
  }
};

module.exports = { updateProject };