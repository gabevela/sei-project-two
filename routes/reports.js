var express = require('express');
var router = express.Router();

let reportCtrl = require('../controllers/reportCtrl');
let additionalInfoCtrl = require('../controllers/additionalInfoCtrl');

router.get('/', reportCtrl.index);

router.get('/new', reportCtrl.newReport);

router.post('/', reportCtrl.create);

router.get('/:id', reportCtrl.show);

router.post('/:id/additionalInfo', additionalInfoCtrl.create);

module.exports = router;

