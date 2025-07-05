const express = require('express');
const { createProject } = require('../controllers/createProject');
const { getUserProjects } = require('../controllers/getUserProjects');
const { createTask } = require('../controllers/createTask');
const { getTasksOfProject } = require('../controllers/getTasksOfProject');
const { updateTask } = require('../controllers/UpdateTask');
const { updateProject } = require('../controllers/updateProject');
const { deleteTask } = require('../controllers/deleteTask');
const { deleteProject } = require('../controllers/deleteProject');
const router = express.Router();

//const { getTrips } = require('../controllers/GetAllTrips');

router.get('/', (req, res) => {
  res.send('Hello Router')
})

router.post('/projects/new', createProject);
router.post('/projects/getUserProjects', getUserProjects);
router.post('/projects/update', updateProject);
router.delete('/projects/delete', deleteProject);

router.post('/tasks/new', createTask);
router.post('/tasks/getTasksOfProject', getTasksOfProject);
router.delete('/tasks/delete', deleteTask);

router.patch('/tasks/update/:id', updateTask);

module.exports = router;