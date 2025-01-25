const express = require('express');
//const isAllowedOrigin = require('../middleware/isAllowedOrigin');
const router = express.Router();

const { getTrips } = require('../controllers/GetAllTrips');
const { getTripByDate } = require('../controllers/GetTripByDate');
const { getTripByCode } = require('../controllers/GetTripByCode');
const { getTripByRoute } = require('../controllers/GetTripByRoute');

const { getAdminTripById } = require('../controllers/GetAdminTripById');

const { getMyTrips } = require('../controllers/GetMyTrips');
const { deleteTrip } = require('../controllers/DeleteTrip');

//const { sendEmail } = require('./controllers/SendEmail');
const { makeReservation } = require('../controllers/Reservation');
const { getDriverTrips } = require('../controllers/GetDriverTrips');

const { createTrip } = require('../controllers/CreateTrip');
const { makeFull } = require('../controllers/MakeTripFull');
const { adminReservation } = require('../controllers/AdminReservation');
const { getTravelsToday } = require('../controllers/GetTravelsToday');
const { updateDriver } = require('../controllers/UpdateDriver');
const { updateRoute } = require('../controllers/UpdateRoute');

//Car related endpoints
const { saveCarCoords } = require('../controllers/not used/saveCarCoords');
const { getCarCoords } = require('../controllers/not used/GetCarCoords');

//Role related endpoints
const { getRole } = require('../controllers/GetRole');

// Destination
const { getDestinations } = require('../controllers/not used/GetDestinations');
const { addDestinations } = require('../controllers/not used/AddDestinations');


/* getTravelsToday some fake comments */

router.get('/', (req, res) => {
  res.send('Hello Router')
})

router.get('/alltrips', getTrips);

router.post('/tripdate', getTripByDate);
router.post('/tripcode', getTripByCode);
router.post('/triproute', getTripByRoute);

router.post('/myTrips', getMyTrips);

router.post('/delete', deleteTrip);

router.post('/reservation', makeReservation);

router.post('/adminReservation', adminReservation);

router.post('/driver', getDriverTrips);

router.post('/createTrip', createTrip);

router.post('/makeFull', makeFull);

router.post('/updatedriver', updateDriver);

router.post('/updateroute', updateRoute);


router.post('/car', saveCarCoords);

router.post('/carCoords', getCarCoords);

router.post('/travels', getTravelsToday);

router.post('/role', getRole);

router.get('/alldest', getDestinations);

router.post('/adddest', addDestinations);

router.post('/ordertrip', getAdminTripById);

//router.get('/email', sendEmail);

module.exports = router;