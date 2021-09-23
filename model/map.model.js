module.exports = class Map {
    constructor(
        version,
        layers,
        styles,
        srs,
        bbox,
        width,
        height,
        format,
        transparent,
        bgcolor,
        exceptions,
        time,
        sld,
        sld_body,
        cql_filter
    ) {
        this.version = version;
        this.layers = layers;
        this.styles = styles;
        this.srs = srs;
        this.bbox = bbox;
        this.width = width;
        this.height = height;
        this.format = format;
        this.transparent = transparent;
        this.bgcolor = bgcolor;
        this.exceptions = exceptions;
        this.time = time;
        this.sld = sld;
        this.sld_body = sld_body;
        this.cql_filter = cql_filter;
    }
}
