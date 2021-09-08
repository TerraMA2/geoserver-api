'use strict'
const featureTypeController = require('../controllers/featureType.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/featuretype', featureTypeController.get);
    fastify.post('/featuretype', featureTypeController.create);
    fastify.post('/featuretype/createAll', featureTypeController.createAll);
    fastify.put('/featuretype', featureTypeController.update);
    fastify.delete('/featuretype/', featureTypeController.delete);
}
