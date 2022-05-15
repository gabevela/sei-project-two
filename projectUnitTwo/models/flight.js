const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//this will allow us to store a doc:
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNumber: Number,
    departs: Date
  });

// THIS IS WHERE YOU SPECIFY THE COLLECTION NAME!!!!
// let flightsModel = mongoose.model('COLLECTION_NAME', flightsSchema);
let flightModel = mongoose.model('Flight', flightSchema);

//module.exports = mongoose.model('Flight', flightSchema);                
module.exports = flightModel;                
