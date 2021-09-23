const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");
const validator = require('../utils/validator');

exports.getMap = async (params) => {
    const { geoserverBasePath } = params;

    const isValid = validator.validateMap(params);
    if (isValid !== true) {
        return response(400, isValid);
    }
    params['service']='WMS';
    params['request']='GetMap';
    const options = {
        url: 'wms',
        method: 'get',
        responseType: 'arraybuffer',
        contentType: params.format,
        params
    };
    return await request(options, geoserverBasePath)
        .then(res => response(res.status, '', Buffer.from(res.data).toString('base64')))
        .catch((error) => handleErrors(error, `Couldn't get the map image`));
}

exports.getLegend = async (params) => {
    const { geoserverBasePath } = params;

    const isValid = validator.validateLegend(params);
    if (isValid !== true) {
        return response(400, isValid);
    }
    params['service']='WMS';
    params['request']='GetLegendGraphic';
    const options = {
        url: 'wms',
        method: 'get',
        responseType: 'arraybuffer',
        contentType: 'image/png',
        params
    };
    return await request(options, geoserverBasePath)
        .then(res => response(res.status, '', Buffer.from(res.data).toString('base64')))
        .catch((error) => handleErrors(error, `Couldn't get the legend image`));
}
