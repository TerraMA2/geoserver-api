const Map = require("../model/map.model");
const Legend = require("../model/legend.model");
const InfoWMS = require("../model/info-wms.model");
const InfoWFS = require("../model/info-wfs.model");
const {response} = require("../utils/response");

module.exports.validateMap = (params) => {
    const { version, layers, styles, srs, bbox, width, height, format, transparent, bgcolor, exceptions, time, sld, sld_body, cql_filter } = params;
    const map = new Map(version, layers, styles, srs, bbox, width, height, format, transparent, bgcolor, exceptions, time, sld, sld_body, cql_filter);
    if (!map.version) {
        return 'Missing version';
    }
    if (!map.layers) {
        return 'Missing layers';
    }
    if (!map.srs) {
        return 'Missing srs';
    }
    if (!map.bbox) {
        return 'Missing bbox';
    }
    if (!map.width){
        return 'Missing width';
    }
    if (!map.height) {
        return 'Missing height';
    }
    if (!map.format) {
        return 'Missing format';
    }
    return true
}

module.exports.validateLegend = (params) => {
    const { layer, style, featuretype, rule, scale, sld, sld_body, format, width, height, exceptions, language, legend_options, version } = params;
    const legend = new Legend(layer, style, featuretype, rule, scale, sld, sld_body, format, width, height, exceptions, language, legend_options, version);
    if (!legend.layer) {
        return 'Missing layer';
    }
    if (!legend.format) {
        return 'Missing format';
    }
    return true
}

module.exports.validateInfoWMS = (params) => {
    const { version, layers, styles, srs, bbox, width, height, query_layers, info_format, feature_count, x, y, exceptions } = params;
    const infoWMS = new InfoWMS(version, layers, styles, srs, bbox, width, height, query_layers, info_format, feature_count, x, y, exceptions);
    if (!infoWMS.version) {
        return 'Missing version';
    }
    if (!infoWMS.layers) {
        return 'Missing layers';
    }
    if (!infoWMS.srs) {
        return 'Missing srs';
    }
    if (!infoWMS.bbox) {
        return 'Missing bbox';
    }
    if (!infoWMS.width) {
        return 'Missing width';
    }
    if (!infoWMS.height) {
        return 'Missing height';
    }
    if (!infoWMS.query_layers) {
        return 'Missing query layers';
    }
    if (!infoWMS.x) {
        return 'Missing x';
    }
    if (!infoWMS.y) {
        return 'Missing y';
    }
    return true;
}

module.exports.validateInfoWFS = (params) => {
    const { version, typeNames, srsName, bbox, count, maxFeatures, sortBy, propertyName, outputFormat, exceptions, cql_filter, featureID } = params;
    const infoWFS = new InfoWFS(version, typeNames, srsName, bbox, count, maxFeatures, sortBy, propertyName, outputFormat, exceptions, cql_filter, featureID);
    if (!infoWFS.version) {
        return 'Missing version';
    }
    if (!infoWFS.typeNames) {
        return 'Missing typeNames';
    }
    return true;
}

module.exports.isJSON = (data) => {
    try {
        JSON.parse(Buffer.from(data).toString('utf-8'));
        return true;
    } catch (e) {
        return false;
    }
}
