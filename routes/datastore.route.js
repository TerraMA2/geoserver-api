'use strict'
const dataStoreController = require('../controllers/datastore.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/datastore', dataStoreController.get);
    fastify.post('/datastore', dataStoreController.create);
    fastify.post('/datastore/createAll', dataStoreController.createAll);
    fastify.put('/datastore', dataStoreController.update);
    fastify.delete('/datastore', dataStoreController.delete);
}
