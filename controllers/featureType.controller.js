const featureTypeService = require("../services/featureType.service");

exports.get = async (request, reply) => {
    const {workspaceName, featureTypeName, dataStoreName, geoserverBasePath} = request.query;
    return await featureTypeService.get(workspaceName, featureTypeName, dataStoreName, geoserverBasePath);
};

exports.create = async (request, reply) => {
    const {data, workspaceName} = request.body;
    const {geoserverBasePath} = request.query;
    return await featureTypeService.create(data, workspaceName, geoserverBasePath);
};

exports.createAll = async (request, reply) => {
    const featureTypes = request.body;
    const {geoserverBasePath} = request.query;
    return await Promise.all(featureTypes.map((featureType => featureTypeService.create(featureType.data, featureType.workspaceName, geoserverBasePath))));
};

exports.update = async (request, reply) => {
    const {data, featureTypeName, workspaceName} = request.body;
    const {geoserverBasePath} = request.query;
    return await featureTypeService.update(data, featureTypeName, workspaceName, geoserverBasePath);
};

exports.delete = async (request, reply) => {
    const {featureTypeName, workspaceName} = request.body;
    const {basePath} = request.query;
    return await featureTypeService.delete(featureTypeName, workspaceName, basePath);
};
