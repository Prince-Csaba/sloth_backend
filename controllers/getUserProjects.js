// so I need here a post endpoint, what take an user as string and return all projects of this user

const Project = require("../models/project.model");

const getUserProjects = async (req, res) => {
  const { user } = req.body;
  console.log(user);
  try {
    const projects = await Project.find({ user: user });
    console.log(projects);
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error finding user projects:', error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getUserProjects };
