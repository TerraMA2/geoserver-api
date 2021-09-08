const path = require('path')
const autoload = require('fastify-autoload')
const sensible = require('fastify-sensible')
const helmet = require('fastify-helmet')
const compress = require('fastify-compress')
const cors = require('fastify-cors')

const config = require(__dirname + '/config/config.json');
const basePath = config.basePath;

module.exports = async function (fastify, opts) {
    fastify.register(compress)
    fastify.register(helmet)
    fastify.register(cors)
    fastify.register(sensible)
    fastify.register(autoload, {
        dir: path.join(__dirname, 'routes'),
        options: Object.assign({prefix: basePath}, opts)
    })
}
