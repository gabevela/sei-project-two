const reportModel = require("../models/report");

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
  create
};