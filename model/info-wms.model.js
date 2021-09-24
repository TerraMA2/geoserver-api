module.exports = class InfoWMS {
    constructor(
        version,
        layers,
        styles,
        srs,
        bbox,
        width,
        height,
        query_layers,
        info_format,
        feature_count,
        x,
        y,
        exceptions
    ) {
        this.version = version;
        this.layers = layers;
        this.styles = styles;
        this.srs = srs;
        this.bbox = bbox;
        this.width = width;
        this.height = height;
        this.query_layers = query_layers;
        this.info_format = info_format;
        this.feature_count = feature_count;
        this.x = x;
        this.y = y;
        this.exceptions = exceptions;
    }
}
