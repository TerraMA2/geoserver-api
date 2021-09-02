const express = require('express');
const router = express.Router();
const layerGroupController = require('../controllers/layer-group.controller');

router.get('/', layerGroupController.get);
router.post('/', layerGroupController.create);
router.post('/createAll', layerGroupController.createAll);
router.put('/', layerGroupController.update);
router.delete('/', layerGroupController.delete);

module.exports = router
