const Map = require("../model/map.model");
const Legend = require("../model/legend.model");

module.exports.validateMap = (params) => {
    const { version, layers, styles, srs, bbox, width, height, format, transparent, bgcolor, exceptions, time, sld, sld_body, cql_filter } = params;
    const map = new Map(version, layers, styles, srs, bbox, width, height, format, transparent, bgcolor, exceptions, time, sld, sld_body, cql_filter);
    if (!map.version) {
        return 'Missing version';
    }
    if (!map.layers) {
        return 'Missing layers';
    }
    if (!map.styles) {
        return 'Missing styles';
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
