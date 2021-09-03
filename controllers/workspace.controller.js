const workspaceService = require("../services/workspace.service");

exports.get = async (req, res, next) => {
    const {workspaceName, geoserverBasePath} = req.query;
    res.json(await workspaceService.get(workspaceName, geoserverBasePath));
};

exports.create = async (req, res, next) => {
    const {data} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await workspaceService.create(data, geoserverBasePath));
};

exports.createAll = async (req, res, next) => {
    const workspaces = req.body;
    const {geoserverBasePath} = req.query;
    const response = await Promise.all(workspaces.map((workspace => workspaceService.create(workspace.data, geoserverBasePath))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, workspaceName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await workspaceService.update(data, workspaceName, geoserverBasePath));
};

exports.delete = async (req, res, next) => {
    const {workspaceName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await workspaceService.delete(workspaceName, geoserverBasePath));
};
