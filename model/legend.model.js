module.exports = class Legend {
    constructor(
        layer,
        style,
        featuretype,
        rule,
        scale,
        sld,
        sld_body,
        format,
        width,
        height,
        exceptions,
        language,
        legend_options,
        version
    ) {
        this.layer = layer;
        this.style = style;
        this.featuretype = featuretype;
        this.rule = rule;
        this.scale = scale;
        this.sld = sld;
        this.sld_body = sld_body;
        this.format = format;
        this.width = width;
        this.height = height;
        this.exceptions = exceptions;
        this.languag = language;
    }
}
