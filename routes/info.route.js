'use strict'
const infoController = require('../controllers/info.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/info/wms', infoController.getWMS);
    fastify.get('/info/wfs', infoController.getWFS);
}
