const dataStoreService = require("../services/datastore.service");

exports.get = async (req, res, next) => {
    const {workspaceName, type, dataStoreName} = req.query;
    res.json(await dataStoreService.get(workspaceName, type, dataStoreName));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName, type} = req.body;
    res.json(await dataStoreService.create(data, workspaceName, type));
};

exports.createAll = async (req, res, next) => {
    const dataStores = req.body;
    const response = await Promise.all(dataStores.map((dataStore => dataStoreService.create(dataStore.data, dataStore.workspaceName, dataStore.type))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, dataStoreName, workspaceName, type} = req.body;
    res.json(await dataStoreService.update(data, dataStoreName, workspaceName, type));
};

exports.delete = async (req, res, next) => {
    const {dataStoreName, workspaceName, type} = req.body;
    res.json(await dataStoreService.delete(dataStoreName, workspaceName, type));
};
