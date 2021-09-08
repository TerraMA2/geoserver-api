const {response} = require("./response");

exports.handleErrors = async (error, message) => {
    const errorResponse = error.response;
    let data = [];
    let status = '500';
    if (errorResponse) {
        const statusText = errorResponse.statusText;
        status = errorResponse.status + (statusText ? ` -  ${ statusText } - ${ errorResponse.data }` : '');
    }
    return response(status, message, data);
}
