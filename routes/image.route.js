'use strict'
const imageController = require('../controllers/image.controller');

module.exports = async function (fastify, opts) {
    fastify.get('/image/map', imageController.getMap);
    fastify.get('/image/legend', imageController.getLegend);
}
