const config = require(__dirname + '/../config/config.json');

exports.getBaseUrl = (geoserverBasePath = '/') => {
    return `${ config.baseUrl }${ geoserverBasePath }geoserver/rest/`;
}
