const styleService = require("../services/style.service");

exports.get = async (req, res, next) => {
    const {workspaceName, styleName} = req.query;
    res.json(await styleService.get(workspaceName, styleName));
};

exports.create = async (req, res, next) => {
    const {data, workspaceName} = req.body;
    res.json(await styleService.create(data, workspaceName));
};

exports.createAll = async (req, res, next) => {
    const styles = req.body;
    const response = await Promise.all(styles.map((style => styleService.create(style.data, style.workspaceName))));
    res.json(response);
};

exports.update = async (req, res, next) => {
    const {data, workspaceName, styleName} = req.body;
    res.json(await styleService.update(data, workspaceName, styleName));
};

exports.delete = async (req, res, next) => {
    const {workspaceName, styleName} = req.body;
    res.json(await styleService.delete(workspaceName, styleName));
};

exports.upload = async (req, res, next) => {
    const {data, workspaceName, sldFile, sldFileSize} = req.body;
    res.json(await styleService.upload(data, workspaceName, sldFile, sldFileSize));
};

exports.uploadAll = async (req, res, next) => {
    const styles = req.body;
    const response = await Promise.all(styles.map(async style => await styleService.upload(style.data, style.workspaceName, style.sldFile, style.sldFileSize)));
    res.json(response);
};
