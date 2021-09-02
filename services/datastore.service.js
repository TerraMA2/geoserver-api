const {request} = require("../utils/request");
const {result} = require("../utils/result");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, type, dataStoreName = '') => {
    const url = `workspaces/${ workspaceName }/${ type }stores${dataStoreName ? '/' + dataStoreName : ''}`;
    const method = 'get';
    return await request({url, method})
        .then(response => result(response.status, '', response.data))
        .catch((error) => handleErrors(error, `Couldn't list dataStores`));
}

exports.create = async (data, workspaceName, type) => {
    const dataStoreName = data[type + 'Store'].name;
    const url = `workspaces/${ workspaceName }/${ type }stores`;
    const method = 'post';
    return await request({url, method, data})
        .then(response => result(response.status, `Datastore ${ dataStoreName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create dataStore ${ dataStoreName }`));
}

exports.update = async (data, dataStoreName, workspaceName, type) => {
    const url = `workspaces/${ workspaceName }/${ type }stores/${ dataStoreName }`;
    const method = 'put';
    return await request({url, method, data})
        .then(response => result(response.status, `Datastore ${ dataStoreName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update dataStore ${ dataStoreName }`));
}

exports.delete = async (dataStoreName, workspaceName, type) => {
    const url = `workspaces/${ workspaceName }/${ type }stores/${ dataStoreName }?recurse=true`;
    const method = 'delete';
    return await request({url, method})
        .then(response => result(response.status, `Datastore ${ dataStoreName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete dataStore ${ dataStoreName }`));
}
