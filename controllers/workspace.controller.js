const workspaceService = require("../services/workspace.service");

exports.get = async (request, reply) => {
    const {workspaceName, geoserverBasePath} = request.query;
    return await workspaceService.get(workspaceName, geoserverBasePath);
};

exports.create = async (request, reply) => {
    const {data} = request.body;
    const {geoserverBasePath} = request.query;
    return await workspaceService.create(data, geoserverBasePath);
};

exports.createAll = async (request, reply) => {
    const workspaces = request.body;
    const {geoserverBasePath} = request.query;
    return await Promise.all(workspaces.map((workspace => workspaceService.create(workspace.data, geoserverBasePath))));
};

exports.update = async (request, reply) => {
    const {data, workspaceName} = request.body;
    const {geoserverBasePath} = request.query;
    return await workspaceService.update(data, workspaceName, geoserverBasePath);
};

exports.delete = async (request, reply) => {
    const {workspaceName} = request.body;
    const {geoserverBasePath} = request.query;
    return await workspaceService.delete(workspaceName, geoserverBasePath);
};
