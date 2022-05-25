const ReportModel = require("../models/report.js");

async function index(req, res) { 
    let reports = await ReportModel.find();
    //console.log('reports', reports);
    //res.send('testing');
    res.render('reports-index.ejs', { reports });
};

function newReport(req, res, next) {
  res.render('new.ejs');
};

async function show(req, res){
  let report = await ReportModel.findById(req.params.id);   
  res.render('show.ejs',{report})
}

async function create(req, res, next) {
  console.log(req.body);
  let obj = {
    reportType: req.body.reportType,
    locationCoordinates: req.body.locationCoordinates,
    timeAndDate: req.body.timeAndDate
  }
  
  await ReportModel.create(obj); 
  res.redirect('/reports');

};

module.exports = {
  newReport,
  create, 
  index,
  show
};