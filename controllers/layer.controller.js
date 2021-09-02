const layerService = require("../services/layer.service");

exports.get = async (req, res, next) => {
    const {workspaceName, type, layerName} = req.query;
    res.json(await layerService.get(workspaceName, type, layerName));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName, type} = req.body;
    res.json(await layerService.create(data, workspaceName, type));
};

exports.createAll = async (req, res, next) => {
    const layers = req.body;
    const response = await Promise.all(layers.map((layer => layerService.create(layer.data, layer.workspaceName, layer.type))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, workspaceName, layerName, type} = req.body;
    res.json(await layerService.update(data, workspaceName, layerName, type));
};

exports.delete = async (req, res, next) => {
    const {workspaceName, layerName, type} = req.body;
    res.json(await layerService.delete(workspaceName, layerName, type));
};

exports.deleteAll = async (req, res, next) => {
    const layers = req.body;
    const response = await Promise.all(layers.map((layer => layerService.delete(layer.workspaceName, layer.layerName, layer.type))));
    res.json(response);
};
