const axios = require("axios");
const url = require("../utils/url");
const config = require(__dirname + '/../config/config.json');

exports.request = async (options = {}, geoserverBasePath) => {
    const {contentType = 'application/json', accept = 'application/json', contentLength = null} = options;
    const headers = {
        "Authorization": 'Basic ' + Buffer.from(`${ config.username }:${ config.password }`).toString('base64'),
        "Content-Type": contentType
    };

    if (contentLength) {
        headers['Content-length'] = contentLength;
    }

    if (accept) {
        headers['Accept'] = accept;
    }

    options['baseURL'] = url.getBaseUrl(geoserverBasePath);
    options['headers'] = headers;

    return axios(options);
}
