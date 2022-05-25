//will house our Schema for our report
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({
    reportSubType: String,
    locationNotes: String,
    reportNotes: String
});

const reportSchema = new Schema({
    reportType: String,
    locationCoordinates: [String],
    timeAndDate: Date,
    additionalInfo: [infoSchema] // array of subdocuments 
});

let reportModel = mongoose.model('Report', reportSchema);

module.exports = reportModel;