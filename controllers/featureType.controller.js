const featureTypeService = require("../services/featureType.service");

exports.get = async (req, res, next) => {
    const {workspaceName, featureTypeName, dataStoreName, geoserverBasePath} = req.query;
    res.json(await featureTypeService.get(workspaceName, featureTypeName, dataStoreName, geoserverBasePath));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await featureTypeService.create(data, workspaceName, geoserverBasePath));
};

exports.createAll = async (req, res, next) => {
    const featureTypes = req.body;
    const {geoserverBasePath} = req.query;
    const response = await Promise.all(featureTypes.map((featureType => featureTypeService.create(featureType.data, featureType.workspaceName, geoserverBasePath))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, featureTypeName, workspaceName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await featureTypeService.update(data, featureTypeName, workspaceName, geoserverBasePath));
};

exports.delete = async (req, res, next) => {
    const {featureTypeName, workspaceName} = req.body;
    const {basePath} = req.query;
    res.json(await featureTypeService.delete(featureTypeName, workspaceName, basePath));
};
