const Report = require('../models/report.js');

async function create(req, res){
    let reportID = req.params.id;

    let reportDoc = await Report.findById(reportID);

    let additionalInfoObj = {
        reportSubType: req.body.reportSubType,
        locationNotes: req.body.locationNotes,
        reportNotes: req.body.reportNotes
    }
    reportDoc.additionalInfo.push(additionalInfoObj);
    await reportDoc.save();

    res.redirect('/reports/'+reportID)  
}

module.exports = {
    create
}

