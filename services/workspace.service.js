const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName = '', geoserverBasePath) => {
    const url = `rest/workspaces${ workspaceName ? '/' + workspaceName : '' }`;
    const method = 'get';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't list workspaces`));
}

exports.create = async (data, geoserverBasePath) => {
    const workspaceName = data.workspace.name;
    const url = 'rest/workspaces';
    const method = 'post';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Workspace ${ workspaceName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create workspace ${ workspaceName }`));
}

exports.update = async (data, workspaceName, geoserverBasePath) => {
    const url = `rest/workspaces/${ workspaceName }`;
    const method = 'put';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Workspace ${ workspaceName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update workspace ${ workspaceName }`));
}

exports.delete = async (workspaceName, geoserverBasePath) => {
    const url = `rest/workspaces/${ workspaceName }`;
    const method = 'delete';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, `Workspace ${ workspaceName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete workspace ${ workspaceName }`));
}
