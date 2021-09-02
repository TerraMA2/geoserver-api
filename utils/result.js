exports.result = (status, message, data = []) => {
    return {
        status,
        message,
        data
    }
};
