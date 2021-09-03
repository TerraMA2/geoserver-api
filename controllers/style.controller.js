const styleService = require("../services/style.service");

exports.get = async (req, res, next) => {
    const {workspaceName, styleName, geoserverBasePath} = req.query;
    res.json(await styleService.get(workspaceName, styleName, geoserverBasePath));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await styleService.create(data, workspaceName, geoserverBasePath));
};

exports.createAll = async (req, res, next) => {
    const styles = req.body;
    const {geoserverBasePath} = req.query;
    const response = await Promise.all(styles.map((style => styleService.create(style.data, style.workspaceName, geoserverBasePath))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, workspaceName, styleName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await styleService.update(data, workspaceName, styleName, geoserverBasePath));
};

exports.delete = async (req, res, next) => {
    const {workspaceName, styleName} = req.body;
    const {geoserverBasePath} = req.query;
    res.json(await styleService.delete(workspaceName, styleName, geoserverBasePath));
};

exports.upload = async (req, res, next) => {
    const {data, workspaceName, sldFile, sldFileSize} = req.body;
    const {basePath} = req.query;
    res.json(await styleService.upload(data, workspaceName, sldFile, sldFileSize, basePath));
};

exports.uploadAll = async (req, res, next) => {
    const styles = req.body;
    const {basePath} = req.query;
    const response = await Promise.all(styles.map(async style => await styleService.upload(style.data, style.workspaceName, style.sldFile, style.sldFileSize, basePath)));
    res.json(response);
};
