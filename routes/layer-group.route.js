'use strict'
const layerGroupController = require('../controllers/layer-group.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/layergroup', layerGroupController.get);
    fastify.post('/layergroup', layerGroupController.create);
    fastify.post('/layergroup/createAll', layerGroupController.createAll);
    fastify.put('/layergroup', layerGroupController.update);
    fastify.delete('/layergroup', layerGroupController.delete);
}
