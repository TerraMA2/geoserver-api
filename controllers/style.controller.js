const styleService = require("../services/style.service");

exports.get = async (request, reply) => {
    const {workspaceName, styleName, geoserverBasePath} = request.query;
    return await styleService.get(workspaceName, styleName, geoserverBasePath);
};

exports.create = async (request, reply) => {
    const {data, workspaceName} = request.body;
    const {geoserverBasePath} = request.query;
    return await styleService.create(data, workspaceName, geoserverBasePath);
};

exports.createAll = async (request, reply) => {
    const styles = request.body;
    const {geoserverBasePath} = request.query;
    return await Promise.all(styles.map((style => styleService.create(style.data, style.workspaceName, geoserverBasePath))));
};

exports.update = async (request, reply) => {
    const {data, workspaceName, styleName} = request.body;
    const {geoserverBasePath} = request.query;
    return await styleService.update(data, workspaceName, styleName, geoserverBasePath);
};

exports.delete = async (request, reply) => {
    const {workspaceName, styleName} = request.body;
    const {geoserverBasePath} = request.query;
    return await styleService.delete(workspaceName, styleName, geoserverBasePath);
};

exports.upload = async (request, reply) => {
    const {data, workspaceName, sldFile, sldFileSize} = request.body;
    const {basePath} = request.query;
    return await styleService.upload(data, workspaceName, sldFile, sldFileSize, basePath);
};

exports.uploadAll = async (request, reply) => {
    const styles = request.body;
    const {basePath} = request.query;
    return await Promise.all(styles.map(async style => await styleService.upload(style.data, style.workspaceName, style.sldFile, style.sldFileSize, basePath)));
};
