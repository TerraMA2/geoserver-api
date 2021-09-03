const layerGroupService = require("../services/layer-group.service");

exports.get = async (req, res, next) => {
    const {workspaceName, layerGroupName, geoserverBasePath} = req.query;
    res.json(await layerGroupService.get(workspaceName, layerGroupName, geoserverBasePath));
};

exports.create = async (req, res, next) => {
    const {data} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await layerGroupService.create(data, geoserverBasePath));
};

exports.createAll = async (req, res, next) => {
    const layerGroups = req.body;
    const {geoserverBasePath} = req.query;
    const response = await Promise.all(layerGroups.map((layerGroup => layerGroupService.create(layerGroup.data, geoserverBasePath))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, layerGroupName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await layerGroupService.update(data, layerGroupName, geoserverBasePath));
};

exports.delete = async (req, res, next) => {
    const {layerGroupName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await layerGroupService.delete(layerGroupName, geoserverBasePath));
};
