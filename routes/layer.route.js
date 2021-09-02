const express = require('express');
const router = express.Router();
const layerController = require('../controllers/layer.controller');

router.get('/', layerController.get);
router.post('/', layerController.create);
router.post('/createAll', layerController.createAll);
router.put('/', layerController.update);
router.delete('/', layerController.delete);

module.exports = router
