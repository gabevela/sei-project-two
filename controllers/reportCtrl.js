function newReport(req, res, next) {
  res.render('new.ejs');
};

function create(req, res, next){
   console.log(req.body);
   res.send('testing the "create" function');

};



module.exports = {
  newReport, 
  create
};

