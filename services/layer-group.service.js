const {request} = require("../utils/request");
const {result} = require("../utils/result");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, layerGroupName = '') => {
    const url = `workspaces/${ workspaceName }/layerGroups${ layerGroupName ? '/' + layerGroupName : ''}`;
    const method = 'get';
    return await request({url, method})
        .then(response => result(response.status, '', response.data))
        .catch((error) => handleErrors(error, `Couldn't list layer groups`));
}

exports.create = async (data) => {
    const layerGroupName = data.layerGroup.name;
    const url = 'layerGroups';
    const method = 'post';
    return await request({url, method, data})
        .then(response => result(response.status, `Layer group ${ layerGroupName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create layer group ${ layerGroupName }`));
}

exports.update = async (data, layerGroupName) => {
    const url = `layerGroups/${ layerGroupName }`;
    const method = 'put';
    return await request({url, method, data})
        .then(response => result(response.status, `Layer group ${ layerGroupName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update layer group ${ layerGroupName }`));
}

exports.delete = async (layerGroupName) => {
    const url = `layerGroups/${ layerGroupName }`;
    const method = 'delete';
    return await request({url, method})
        .then(response => result(response.status, `Layer group ${ layerGroupName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete layer group ${ layerGroupName }`));
}
