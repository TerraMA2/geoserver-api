const workspaceService = require("../services/workspace.service");

exports.get = async (req, res, next) => {
    const {workspaceName} = req.query;
    res.json(await workspaceService.get(workspaceName));
};

exports.create = async (req, res, next) => {
    const {data} = req.body;
    res.json(await workspaceService.create(data));
};

exports.createAll = async (req, res, next) => {
    const workspaces = req.body;
    const response = await Promise.all(workspaces.map((workspace => workspaceService.create(workspace.data))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, workspaceName} = req.body;
    res.json(await workspaceService.update(data, workspaceName));
};

exports.delete = async (req, res, next) => {
    const {workspaceName} = req.body;
    res.json(await workspaceService.delete(workspaceName));
};
