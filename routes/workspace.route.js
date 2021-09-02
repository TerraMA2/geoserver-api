const express = require('express');
const router = express.Router();
const workspaceController = require('../controllers/workspace.controller');

router.get('/', workspaceController.get);
router.post('/', workspaceController.create);
router.post('/createAll', workspaceController.createAll);
router.put('/', workspaceController.update);
router.delete('/', workspaceController.delete);

module.exports = router
