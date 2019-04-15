const expressJwt = require("express-jwt");
const environment = require("../environments/environment");

const token = expressJwt({
    secret: environment.token.secret,
    userProperty: "payload"
});

const middlewares = {
    token: token
};

module.exports = middlewares;
