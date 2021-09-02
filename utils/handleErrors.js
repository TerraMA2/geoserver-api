const {result} = require("./result");
const debug = require('debug')('geoserver-api:development')

exports.handleErrors = async (error, message) => {
    const response = error.response;
    let data = [];
    let status = '500';
    if (response) {
        const statusText = response.statusText;
        status = response.status + (statusText ? ` -  ${ statusText }` : '');
        debug(`${ status }: ${ JSON.stringify(response.data) } - ${ response.headers }`);
    } else if (error.request) {
        debug(error.request);
    } else {
        debug(error.message);
    }
    debug(error.config)
    return result(status, message, data);
}
