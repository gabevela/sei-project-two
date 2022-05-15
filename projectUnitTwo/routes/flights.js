var express = require('express');
var router = express.Router();

let flightCtrl = require('../controllers/flightCtrl')

//this router may need to be 
//changed to: router.get('/', flightCtrl.index);
router.get('/', flightCtrl.index);  //GET /flights

//renders the form
router.get('/new', flightCtrl.newFlight);

//handles the POST /flights
router.post('/', flightCtrl.create);

//
router.get('/:id', flightCtrl.show);  //GET details of each flight

module.exports = router;
