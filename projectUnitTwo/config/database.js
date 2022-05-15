const mongoose = require('mongoose');
//this is a mongodb connection string 
//here is where you indicate the database that will be
//connected   
mongoose.connect('mongodb://localhost/flights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true
});
// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});



