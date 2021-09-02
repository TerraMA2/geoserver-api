const express = require('express');
const router = express.Router();
const styleController = require('../controllers/style.controller');

router.get('/', styleController.get);
router.post('/', styleController.create);
router.post('/createAll', styleController.createAll);
router.put('/', styleController.update);
router.delete('/', styleController.delete);
router.post('/upload', styleController.upload);
router.post('/uploadAll', styleController.uploadAll);

module.exports = router
