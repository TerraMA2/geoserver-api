const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, layerGroupName = '', geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/layergroups${ layerGroupName ? '/' + layerGroupName : '' }`;
    const method = 'get';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't list layer groups`));
}

exports.create = async (data, geoserverBasePath) => {
    const layerGroupName = data.layerGroup.name;
    const url = 'layergroups';
    const method = 'post';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Layer group ${ layerGroupName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create layer group ${ layerGroupName }`));
}

exports.update = async (data, layerGroupName, geoserverBasePath) => {
    const url = `layergroups/${ layerGroupName }`;
    const method = 'put';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Layer group ${ layerGroupName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update layer group ${ layerGroupName }`));
}

exports.delete = async (layerGroupName, basePath) => {
    const url = `layergroups/${ layerGroupName }`;
    const method = 'delete';
    return await request({url, method}, basePath)
        .then(res => response(res.status, `Layer group ${ layerGroupName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete layer group ${ layerGroupName }`));
}
