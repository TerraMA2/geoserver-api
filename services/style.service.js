const {request} = require("../utils/request");
const {response} = require("../utils/response");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, styleName = '', geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/styles${ styleName ? '/' + styleName : '' }`;
    const method = 'get';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, '', res.data))
        .catch((error) => handleErrors(error, `Couldn't list styles`));
}

exports.create = async (data, workspaceName, geoserverBasePath) => {
    const styleName = data.style.name;
    const url = `workspaces/${ workspaceName }/styles`;
    const method = 'POST';
    return await request({url, method, data, accept: ''}, geoserverBasePath)
        .then(res => response(res.status, `Style ${ styleName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create style ${ styleName }`));
}

exports.update = async (data, workspaceName, styleName, geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/styles/${ styleName }`;
    const method = 'put';
    return await request({url, method, data}, geoserverBasePath)
        .then(res => response(res.status, `Style ${ styleName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update style ${ styleName }`));
}

exports.delete = async (workspaceName, styleName, geoserverBasePath) => {
    const url = `workspaces/${ workspaceName }/styles/${ styleName }`;
    const method = 'delete';
    return await request({url, method}, geoserverBasePath)
        .then(res => response(res.status, `Style ${ styleName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete style ${ styleName }`));
}

exports.upload = async (data, workspaceName, sldFile, sldFileSize, geoserverBasePath) => {
    await this.delete(workspaceName, 'Style');
    await this.delete(workspaceName, 'Default Styler');
    const url = `workspaces/${ workspaceName }/styles`;
    const styleName = data.style.name;
    const method = 'POST';
    sldFile = Buffer.from(sldFile, 'base64').toString('utf8');
    return await request({
        url,
        method,
        data: sldFile,
        contentType: 'application/vnd.ogc.sld+xml',
        contentLength: sldFileSize,
        geoserverBasePath
    })
        .then(async res => {
            const newStyleName = res.data;
            data.style.filename = `${ newStyleName }.sld`;
            const updateResponse = await this.update(data, workspaceName, newStyleName, geoserverBasePath);
            if (updateres.status !== 200 && updateres.status !== 201) {
                return response(updateres.status, `Style ${ styleName } not uploaded`);
            }
            return response(updateres.status, `Style ${ styleName } uploaded`);
        })
        .catch((error) => handleErrors(error, `Couldn't create style ${ styleName }`));
}
