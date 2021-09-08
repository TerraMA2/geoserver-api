'use strict'
const styleController = require('../controllers/style.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/style', styleController.get);
    fastify.post('/style', styleController.create);
    fastify.post('/style/createAll', styleController.createAll);
    fastify.put('/style', styleController.update);
    fastify.delete('/style', styleController.delete);
    fastify.post('/style/upload', styleController.upload);
    fastify.post('/style/uploadAll', styleController.uploadAll);
}

