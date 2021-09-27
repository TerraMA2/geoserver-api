const axios = require("axios");
const url = require("../utils/url");
const config = require(__dirname + '/../config/config.json');

exports.request = async (options = {}, geoserverBasePath, baseURL = null) => {
    const {contentType = 'application/json', accept = 'application/json', contentLength = null} = options;
    const headers = {
        "Content-Type": contentType
    };

    options['baseURL'] = url.getBaseUrl(geoserverBasePath);
    if (baseURL) {
        options['baseURL'] = baseURL;
    } else {
        headers['Authorization'] = 'Basic ' + Buffer.from(`${ config.username }:${ config.password }`).toString('base64');
    }

    if (contentLength) {
        headers['Content-length'] = contentLength;
    }

    if (accept) {
        headers['Accept'] = accept;
    }
    options['headers'] = headers;
    return axios(options);
}
