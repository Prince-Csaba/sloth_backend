const express = require('express');
const { createProject } = require('../controllers/createProject');
const router = express.Router();

//const { getTrips } = require('../controllers/GetAllTrips');

router.get('/', (req, res) => {
  res.send('Hello Router')
})


router.post('/projects/new', createProject);

module.exports = router;