const express = require('express');
const { createProject } = require('../controllers/createProject');
const { getUserProjects } = require('../controllers/getUserProjects');
const { createTask } = require('../controllers/createTask');
const router = express.Router();

//const { getTrips } = require('../controllers/GetAllTrips');

router.get('/', (req, res) => {
  res.send('Hello Router')
})

router.post('/projects/new', createProject);
router.post('/projects/getUserProjects', getUserProjects);

router.post('/tasks/new', createTask);


module.exports = router;