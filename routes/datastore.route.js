const express = require('express');
const router = express.Router();
const dataStoreController = require('../controllers/datastore.controller');

router.get('/', dataStoreController.get);
router.post('/', dataStoreController.create);
router.post('/createAll', dataStoreController.createAll);
router.put('/', dataStoreController.update);
router.delete('/', dataStoreController.delete);

module.exports = router
