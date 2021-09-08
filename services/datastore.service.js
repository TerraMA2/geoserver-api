const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, type, dataStoreName = '', geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/${ type }stores${ dataStoreName ? '/' + dataStoreName : '' }`;
    const method = 'get';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't list dataStores`));
}

exports.create = async (data, workspaceName, type, geoserverBasePath) => {
    const dataStoreName = data[type + 'Store'].name;
    const url = `workspaces/${ workspaceName }/${ type }stores`;
    const method = 'post';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Datastore ${ dataStoreName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create dataStore ${ dataStoreName }`));
}

exports.update = async (data, dataStoreName, workspaceName, type, geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/${ type }stores/${ dataStoreName }`;
    const method = 'put';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Datastore ${ dataStoreName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update dataStore ${ dataStoreName }`));
}

exports.delete = async (dataStoreName, workspaceName, type, geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/${ type }stores/${ dataStoreName }?recurse=true`;
    const method = 'delete';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, `Datastore ${ dataStoreName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete dataStore ${ dataStoreName }`));
}
