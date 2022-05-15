// import the model here too. 
const FlightModel = require("../models/flight.js");

async function index(req, res) {
  let flights = await FlightModel.find();
  //console.log("flights", flights);
  res.render('flights-index.ejs', { flights })
};

//const req = require("express/lib/request");
function newFlight(req, res, next) {
  res.render('new.ejs');
}

async function show(req, res){
  let flight = await FlightModel.findById(req.params.id);   
  console.log(flight)
  res.render('show.ejs',{flight})
}

async function create(req, res) {
  console.log('before passing into the object: ', req.body)
  let obj = {
    airline: req.body.airline,
    airport: req.body.airport,
    flightNumber: req.body.flightNumber,
    departs: req.body.date
  }
  //IMPORTANT!!!!
  //this is the method that puts our object (obj) into mongo 
  await FlightModel.create(obj);
  res.redirect('/flights')
}

module.exports = {
  newFlight,
  create,
  index,
  show
}

