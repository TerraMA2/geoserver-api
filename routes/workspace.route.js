'use strict'
const workspaceController = require('../controllers/workspace.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/workspace', workspaceController.get);
    fastify.post('/workspace', workspaceController.create);
    fastify.post('/workspace/createAll', workspaceController.createAll);
    fastify.put('/workspace', workspaceController.update);
    fastify.delete('/workspace', workspaceController.delete);
}


