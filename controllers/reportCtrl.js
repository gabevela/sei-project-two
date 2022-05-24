const reportModel = require("../models/report");

let ReportModel = require('../models/report');

async function index(req, res) { 
    let reports = await ReportModel.find();
    console.log('reports', reports);
    //res.send('testing');
    res.render('reports-index.ejs', {reports});
};

function newReport(req, res, next) {
  res.render('new.ejs');
};

async function create(req, res, next) {
  console.log(req.body);
  let obj = {
    reportType: req.body.reportType,
    locationCoordinates: req.body.locationCoordinates,
    timeAndDate: req.body.timeAndDate
  }
  
  await ReportModel.create(obj); 

  res.send('testing the "create" function');

};

module.exports = {
  newReport,
  create, 
  index
};