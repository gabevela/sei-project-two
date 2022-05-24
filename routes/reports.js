var express = require('express');
var router = express.Router();

let reportCtrl = require('../controllers/reportCtrl');

/* GET users listing. */
router.get('/new', reportCtrl.newReport);

module.exports = router;
