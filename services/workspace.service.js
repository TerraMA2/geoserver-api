const {request} = require("../utils/request");
const {result} = require("../utils/result");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName = '') => {
    const url = `workspaces${ workspaceName ? '/' + workspaceName : '' }`;
    const method = 'get';
    return await request({url, method})
        .then(response => result(response.status, '', response.data))
        .catch((error) => handleErrors(error, `Couldn't list workspaces`));
}

exports.create = async (data) => {
    const workspaceName = data.workspace.name;
    const url = 'workspaces';
    const method = 'post';
    return await request({url, method, data})
        .then(response => result(response.status, `Workspace ${ workspaceName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create workspace ${ workspaceName }`));
}

exports.update = async (data, workspaceName) => {
    const url = `workspaces/${ workspaceName }`;
    const method = 'put';
    return await request({url, method, data})
        .then(response => result(response.status, `Workspace ${ workspaceName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update workspace ${ workspaceName }`));
}

exports.delete = async (workspaceName) => {
    const url = `workspaces/${ workspaceName }`;
    const method = 'delete';
    return await request({url, method})
        .then(response => result(response.status, `Workspace ${ workspaceName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete workspace ${ workspaceName }`));
}
