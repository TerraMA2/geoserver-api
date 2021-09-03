const layerService = require("../services/layer.service");

exports.get = async (req, res, next) => {
    const {workspaceName, type, layerName, geoserverBasePath} = req.query;
    res.json(await layerService.get(workspaceName, type, layerName, geoserverBasePath));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName, type} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await layerService.create(data, workspaceName, type, geoserverBasePath));
};

exports.createAll = async (req, res, next) => {
    const layers = req.body;
    const {geoserverBasePath} = req.query;
    const response = await Promise.all(layers.map((layer => layerService.create(layer.data, layer.workspaceName, layer.type, geoserverBasePath))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, workspaceName, layerName, type} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await layerService.update(data, workspaceName, layerName, type, geoserverBasePath));
};

exports.delete = async (req, res, next) => {
    const {workspaceName, layerName, type} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await layerService.delete(workspaceName, layerName, type, geoserverBasePath));
};

exports.deleteAll = async (req, res, next) => {
    const layers = req.body;
    const {basePath} = req.query;
    const response = await Promise.all(layers.map((layer => layerService.delete(layer.workspaceName, layer.layerName, layer.type, basePath))));
    res.json(response);
};
