const {request} = require("../utils/request");
const {result} = require("../utils/result");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, type, layerName = '') => {
    const url = `layers/${ workspaceName }/${ type }layers${layerName ? '/' + layerName : ''}`;
    const method = 'get';
    return await request({url, method})
        .then(response => result(response.status, '', response.data))
        .catch((error) => handleErrors(error, `Couldn't list layers`));
}

exports.create = async (data, workspaceName, type) => {
    const layerName = data[type + 'Layer'].name;
    const url = `workspaces/${ workspaceName }/${ type }layers`;
    const method = 'post';
    return await request({url, method, data})
        .then(response => result(response.status, `Layer ${ layerName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create layer ${ layerName }`));
}

exports.update = async (data, workspaceName, layerName, type) => {
    const url = `workspaces/${ workspaceName }/${ type }layers/${ layerName }`;
    const method = 'put';
    return await request({url, method, data})
        .then(response => result(response.status, `Layer ${ layerName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update layer ${ layerName }`));
}

exports.delete = async (workspaceName, layerName, type) => {
    const url = `workspaces/${ workspaceName }/${ type }layers/${ layerName }`;
    const method = 'delete';
    return await request({url, method})
        .then(response => result(response.status, `Layer ${ layerName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete layer ${ layerName }`));
}
