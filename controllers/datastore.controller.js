const dataStoreService = require("../services/datastore.service");

exports.get = async (req, res, next) => {
    const {workspaceName, type, dataStoreName, geoserverBasePath} = req.query;
    res.json(await dataStoreService.get(workspaceName, type, dataStoreName, geoserverBasePath));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName, type} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await dataStoreService.create(data, workspaceName, type, geoserverBasePath));
};

exports.createAll = async (req, res, next) => {
    const dataStores = req.body;
    const {basePath} = req.query;
    const response = await Promise.all(dataStores.map((dataStore => dataStoreService.create(dataStore.data, dataStore.workspaceName, dataStore.type, basePath))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, dataStoreName, workspaceName, type} = req.body;
    const {basePath} = req.query;
    res.json(await dataStoreService.update(data, dataStoreName, workspaceName, type, basePath));
};

exports.delete = async (req, res, next) => {
    const {dataStoreName, workspaceName, type} = req.body;
    const {basePath} = req.query;
    res.json(await dataStoreService.delete(dataStoreName, workspaceName, type, basePath));
};
