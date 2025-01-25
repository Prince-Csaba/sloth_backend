const express = require('express');
const router = express.Router();

//const { getTrips } = require('../controllers/GetAllTrips');

router.get('/', (req, res) => {
  res.send('Hello Router')
})

//router.get('/alltrips', getTrips);

module.exports = router;