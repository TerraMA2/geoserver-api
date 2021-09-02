const featureTypeService = require("../services/featureType.service");

exports.get = async (req, res, next) => {
    const {workspaceName, featureTypeName, dataStoreName} = req.query;
    res.json(await featureTypeService.get(workspaceName, featureTypeName, dataStoreName));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName} = req.body;
    res.json(await featureTypeService.create(data, workspaceName));
};

exports.createAll = async (req, res, next) => {
    const featureTypes = req.body;
    const response = await Promise.all(featureTypes.map((featureType => featureTypeService.create(featureType.data, featureType.workspaceName))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, featureTypeName, workspaceName} = req.body;
    res.json(await featureTypeService.update(data, featureTypeName, workspaceName));
};

exports.delete = async (req, res, next) => {
    const {featureTypeName, workspaceName} = req.body;
    res.json(await featureTypeService.delete(featureTypeName, workspaceName));
};
