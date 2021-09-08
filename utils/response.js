exports.response = (status, message, data = []) => {
    return {
        status,
        message,
        data
    }
};
