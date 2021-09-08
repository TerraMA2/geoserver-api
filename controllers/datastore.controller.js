const dataStoreService = require("../services/datastore.service");

exports.get = async (request, reply) => {
    const {workspaceName, type, dataStoreName, geoserverBasePath} = request.query;
    return await dataStoreService.get(workspaceName, type, dataStoreName, geoserverBasePath);
};

exports.create = async (request, reply) => {
    const {data, workspaceName, type} = request.body;
    const {geoserverBasePath} = request.query;
    return await dataStoreService.create(data, workspaceName, type, geoserverBasePath);
};

exports.createAll = async (request, reply) => {
    const dataStores = request.body;
    const {basePath} = request.query;
    return await Promise.all(dataStores.map((dataStore => dataStoreService.create(dataStore.data, dataStore.workspaceName, dataStore.type, basePath))));
};

exports.update = async (request, reply) => {
    const {data, dataStoreName, workspaceName, type} = request.body;
    const {basePath} = request.query;
    return await dataStoreService.update(data, dataStoreName, workspaceName, type, basePath);
};

exports.delete = async (request, reply) => {
    const {dataStoreName, workspaceName, type} = request.body;
    const {basePath} = request.query;
    return await dataStoreService.delete(dataStoreName, workspaceName, type, basePath);
};
