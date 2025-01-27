const Project = require('../models/project.model');

const createProject = async (req, res) => {
  try {
    const projectData = req.body;
    console.log(projectData);
    const newProject = new Project(projectData);
    console.log(newProject);
/*     await newProject.save(); */
    res.status(201).send(newProject);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { createProject };