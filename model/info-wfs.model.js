module.exports = class InfoWFS {
    constructor(
        version,
        typeNames,
        srsName,
        bbox,
        count,
        maxFeatures,
        sortBy,
        propertyName,
        outputFormat,
        exceptions,
        cql_filter,
        featureID
    ) {
        this.version = version;
        this.typeNames = typeNames;
        this.srsName = srsName;
        this.bbox = bbox;
        this.count = count;
        this.maxFeatures = maxFeatures;
        this.sortBy = sortBy;
        this.propertyName = propertyName;
        this.outputFormat = outputFormat;
        this.exceptions = exceptions;
        this.cql_filter = cql_filter;
        this.featureID = featureID;
    }
}
