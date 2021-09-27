const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");
const validator = require('../utils/validator');
const urlUtil = require("../utils/url");

module.exports.getMap = async (params) => {
    const { geoserverBasePath, onlyUrl, baseURL } = params;
    delete params.geoserverBasePath;
    delete params.onlyUrl;
    delete params.baseURL;

    const isValid = validator.validateMap(params);
    if (isValid !== true) {
        return response(400, isValid);
    }

    params['service']='WMS';
    params['request']='GetMap';
    params['exceptions']='application/json';

    if (onlyUrl) {
        let url = urlUtil.getBaseUrl(geoserverBasePath);
        if (baseURL) {
            url = baseURL;
        }
        return response(200, '', `${url}wms?${new URLSearchParams(params).toString()}`);
    }

    const options = {
        url: 'wms',
        method: 'get',
        responseType: 'arraybuffer',
        contentType: 'image/png' || params.format,
        params
    };
    return await request(options, geoserverBasePath, baseURL)
        .then(async res => {
            const responseBuffer = res.data;
            const errors = checkErrors(responseBuffer);
            if (errors !== false) {
                return response(400, errors)
            }
            return response(res.status, '', `data:${options.contentType};base64,${Buffer.from(responseBuffer).toString('base64')}`)
        })
        .catch((error) => handleErrors(error, `Couldn't get the map image`));
}


module.exports.getLegend = async (params) => {
    const { geoserverBasePath, onlyUrl, baseURL } = params;
    delete params.geoserverBasePath;
    delete params.onlyUrl;
    delete params.baseURL;

    const isValid = validator.validateLegend(params);
    if (isValid !== true) {
        return response(400, isValid);
    }
    params['service']='WMS';
    params['request']='GetLegendGraphic';
    params['exceptions']='application/json';

    if (onlyUrl) {
        return response(200, '', `${url.getBaseUrl(geoserverBasePath)}wms?${new URLSearchParams(params).toString()}`);
    }

    const options = {
        url: 'wms',
        method: 'get',
        responseType: 'arraybuffer',
        contentType: 'image/png' || params.format,
        params
    };
    return await request(options, geoserverBasePath, baseURL)
        .then(async res => {
            const responseBuffer = res.data;
            const errors = checkErrors(responseBuffer);
            if (errors !== false) {
                return response(400, errors)
            }
            return response(res.status, '', `data:${options.contentType};base64,${Buffer.from(responseBuffer).toString('base64')}`)
        })
        .catch((error) => handleErrors(error, `Couldn't get the legend image`));
}

function checkErrors(data) {
    try {
        const isJSON = validator.isJSON(data);
        if (isJSON) {
            const responseJson = JSON.parse(Buffer.from(data).toString('utf-8'));
            const exceptions = responseJson.exceptions;
            const exceptionsTexts = exceptions.map(({text}, index) => `Error ${ ++index } - ${ text }`);
            return exceptionsTexts.join('\n- ');
        }
        return false;
    }catch (e) {
        return 'Error occurred';
    }
}
