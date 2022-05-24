var express = require('express');
var router = express.Router();

let reportCtrl = require('../controllers/reportCtrl');

router.get('/new', reportCtrl.newReport);

router.post('/', reportCtrl.create);

module.exports = router;
