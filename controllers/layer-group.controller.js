const layerGroupService = require("../services/layer-group.service");

exports.get = async (req, res, next) => {
    const {workspaceName, layerGroupName} = req.query;
    res.json(await layerGroupService.get(workspaceName, layerGroupName));
};

exports.create = async (req, res, next) => {
    const {data} = req.body;
    res.json(await layerGroupService.create(data));
};

exports.createAll = async (req, res, next) => {
    const layerGroups = req.body;
    const response = await Promise.all(layerGroups.map((layerGroup => layerGroupService.create(layerGroup.data))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, layerGroupName} = req.body;
    res.json(await layerGroupService.update(data, layerGroupName));
};

exports.delete = async (req, res, next) => {
    const {layerGroupName} = req.body;
    res.json(await layerGroupService.delete(layerGroupName));
};
