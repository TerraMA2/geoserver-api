const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, featureTypeName = '', dataStoreName = '', geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }${ dataStoreName ? '/' + dataStoreName : '' }/featuretypes${ featureTypeName ? '/' + featureTypeName : '' }`;
    const method = 'get';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't list featureTypes`));
}

exports.create = async (data, workspaceName, geoserverBasePath) => {
    const featureTypeName = data.featureType.name;
    const url = `workspaces/${ workspaceName }/featuretypes`;
    const method = 'post';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Feature type ${ featureTypeName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create featureType ${ featureTypeName }`));
}

exports.update = async (data, featureTypeName, workspaceName, geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/featuretypes/${ featureTypeName }`;
    const method = 'put';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Feature type ${ featureTypeName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update featureType ${ featureTypeName }`));
}

exports.delete = async (featureTypeName, workspaceName, geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/featuretypes/${ featureTypeName }?recurse=true`;
    const method = 'delete';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, `Feature type ${ featureTypeName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete featureType ${ featureTypeName }`));
}
