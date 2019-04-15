class CustomError {
    constructor(code, error) {
        this.code = code;
        this.error = error;
    }
}

const models = {
    customError: CustomError
};

module.exports = models;
