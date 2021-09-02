const express = require('express');
const router = express.Router();
const featureTypeController = require('../controllers/featureType.controller');

router.get('/', featureTypeController.get);
router.post('/', featureTypeController.create);
router.post('/createAll', featureTypeController.createAll);
router.put('/', featureTypeController.update);
router.delete('/', featureTypeController.delete);

module.exports = router
