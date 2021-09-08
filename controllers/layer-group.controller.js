const layerGroupService = require("../services/layer-group.service");

exports.get = async (request, reply) => {
    const {workspaceName, layerGroupName, geoserverBasePath} = request.query;
    return await layerGroupService.get(workspaceName, layerGroupName, geoserverBasePath);
};

exports.create = async (request, reply) => {
    const {data} = request.body;
    const {geoserverBasePath} = request.query;
    return await layerGroupService.create(data, geoserverBasePath);
};

exports.createAll = async (request, reply) => {
    const layerGroups = request.body;
    const {geoserverBasePath} = request.query;
    return await Promise.all(layerGroups.map((layerGroup => layerGroupService.create(layerGroup.data, geoserverBasePath))));
};

exports.update = async (request, reply) => {
    const {data, layerGroupName} = request.body;
    const {geoserverBasePath} = request.query;
    return await layerGroupService.update(data, layerGroupName, geoserverBasePath);
};

exports.delete = async (request, reply) => {
    const {layerGroupName} = request.body;
    const {geoserverBasePath} = request.query;
    return await layerGroupService.delete(layerGroupName, geoserverBasePath);
};
