const express = require('express');
const { createProject } = require('../controllers/createProject');
const { getUserProjects } = require('../controllers/getUserProjects');
const { createTask } = require('../controllers/createTask');
const { getTasksOfProject } = require('../controllers/getTasksOfProject');
const { updateTask } = require('../controllers/UpdateTask');
const { updateProject } = require('../controllers/updateProject');
const router = express.Router();

//const { getTrips } = require('../controllers/GetAllTrips');

router.get('/', (req, res) => {
  res.send('Hello Router')
})

router.post('/projects/new', createProject);
router.post('/projects/getUserProjects', getUserProjects);
router.post('/projects/update', updateProject);

router.post('/tasks/new', createTask);
router.post('/tasks/getTasksOfProject', getTasksOfProject);

router.patch('/tasks/update/:id', updateTask);

module.exports = router;