const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const workspaceRouter = require('./routes/workspace.route')
const featureTypeRouter = require('./routes/featureType.route')
const dataStoreRouter = require('./routes/datastore.route')
const layerRouter = require('./routes/layer.route')
const styleRouter = require('./routes/style.route')
const layerGroupRouter = require('./routes/layer-group.route')

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json');
const basePath = config.basePath;

const app = express()

app.use(cors())
app.use(compression({}))
app.use(helmet())
app.use(morgan((env === 'development' ? 'dev' : 'combined'), {}))
app.use(express.json({limit: '200mb', inflate: true, strict: true, type: 'application/json'}))

app.use(basePath + '/workspace', workspaceRouter)
app.use(basePath + '/featuretype', featureTypeRouter)
app.use(basePath + '/datastore', dataStoreRouter)
app.use(basePath + '/layer', layerRouter)
app.use(basePath + '/layergroup', layerGroupRouter)
app.use(basePath + '/style', styleRouter)

module.exports = app
