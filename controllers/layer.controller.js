const layerService = require("../services/layer.service");

exports.get = async (request, reply) => {
    const {workspaceName, type, layerName, geoserverBasePath} = request.query;
    return await layerService.get(workspaceName, type, layerName, geoserverBasePath);
};

exports.create = async (request, reply) => {
    const {data, workspaceName, type} = request.body;
    const {geoserverBasePath} = request.query;
    return await layerService.create(data, workspaceName, type, geoserverBasePath);
};

exports.createAll = async (request, reply) => {
    const layers = request.body;
    const {geoserverBasePath} = request.query;
    return await Promise.all(layers.map((layer => layerService.create(layer.data, layer.workspaceName, layer.type, geoserverBasePath))));
};

exports.update = async (request, reply) => {
    const {data, workspaceName, layerName, type} = request.body;
    const {geoserverBasePath} = request.query;
    return await layerService.update(data, workspaceName, layerName, type, geoserverBasePath);
};

exports.delete = async (request, reply) => {
    const {workspaceName, layerName, type} = request.body;
    const {geoserverBasePath} = request.query;
    return await layerService.delete(workspaceName, layerName, type, geoserverBasePath);
};

exports.deleteAll = async (request, reply) => {
    const layers = request.body;
    const {basePath} = request.query;
    return await Promise.all(layers.map((layer => layerService.delete(layer.workspaceName, layer.layerName, layer.type, basePath))));
};
