const imageService = require("../services/image.service");

exports.getMap = async (request, reply) => {
    return await imageService.getMap(request.query);
};

exports.getLegend = async (request, reply) => {
    return await imageService.getLegend(request.query);
};
