const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");
const validator = require('../utils/validator');

exports.getWMS = async (params) => {
    const { geoserverBasePath } = params;
    delete params.geoserverBasePath;

    const isValid = validator.validateInfoWMS(params);
    if (isValid !== true) {
        return response(400, isValid);
    }

    params['service']='WMS';
    params['request']='GetFeatureInfo';

    const options = {
        url: 'wms',
        method: 'get',
        contentType: "application/json" || params.info_format,
        params
    };

    return await request(options, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't get the map image`));
}

exports.getWFS = async (params) => {
    const { geoserverBasePath } = params;
    delete params.geoserverBasePath;

    const isValid = validator.validateInfoWFS(params);
    if (isValid !== true) {
        return response(400, isValid);
    }

    params['service']='WFS';
    params['request']='GetFeature';

    const options = {
        url: 'wfs',
        method: 'get',
        contentType: "application/json" || params.outputFormat,
        params
    };

    return await request(options, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't get the map image`));
}
