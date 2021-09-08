'use strict'
const layerController = require('../controllers/layer.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/layer', layerController.get);
    fastify.post('/layer', layerController.create);
    fastify.post('/layer/createAll', layerController.createAll);
    fastify.put('/layer', layerController.update);
    fastify.delete('/layer', layerController.delete);
}
