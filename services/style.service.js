const {request} = require("../utils/request");
const {result} = require("../utils/result");
const {handleErrors} = require("../utils/handleErrors");

exports.get = async (workspaceName, styleName = '') => {
    const url = `workspaces/${ workspaceName }/styles${ styleName ? '/' + styleName : ''}`;
    const method = 'get';
    return await request({url, method})
        .then(response => result(response.status, '', response.data))
        .catch((error) => handleErrors(error, `Couldn't list styles`));
}

exports.create = async (data, workspaceName) => {
    const styleName = data.style.name;
    const url = `workspaces/${ workspaceName }/styles`;
    const method = 'POST';
    return await request({url, method, data, accept: ''})
        .then(response => result(response.status, `Style ${ styleName } created!`))
        .catch((error) => handleErrors(error, `Couldn't create style ${ styleName }`));
}

exports.update = async (data, workspaceName, styleName) => {
    const url = `workspaces/${ workspaceName }/styles/${ styleName }`;
    const method = 'put';
    return await request({url, method, data})
        .then(response => result(response.status, `Style ${ styleName } updated!`))
        .catch((error) => handleErrors(error, `Couldn't update style ${ styleName }`));
}

exports.delete = async (workspaceName, styleName) => {
    const url = `workspaces/${ workspaceName }/styles/${ styleName }`;
    const method = 'delete';
    return await request({url, method})
        .then(response => result(response.status, `Style ${ styleName } deleted!`))
        .catch((error) => handleErrors(error, `Couldn't delete style ${ styleName }`));
}

exports.upload = async (data, workspaceName, sldFile, sldFileSize) => {
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
        contentLength: sldFileSize
    })
        .then(async response => {
            const newStyleName = response.data;
            data.style.filename = `${ newStyleName }.sld`;
            const updateResponse = await this.update(data, workspaceName, newStyleName);
            if (updateResponse.status !== 200 && updateResponse.status !== 201) {
                return result(updateResponse.status, `Style ${ styleName } not uploaded`);
            }
            return result(updateResponse.status, `Style ${ styleName } uploaded`);
        })
        .catch((error) => handleErrors(error, `Couldn't create style ${ styleName }`));
}
