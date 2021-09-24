const infoService = require("../services/info.service");

exports.getWMS = async (request, reply) => {
    return await infoService.getWMS(request.query);
};
exports.getWFS = async (request, reply) => {
    return await infoService.getWFS(request.query);
};
