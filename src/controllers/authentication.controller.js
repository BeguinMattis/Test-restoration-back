const authenticationServices = require("../services/authentication.service");

const google = (req, res) => {
    let idToken = req.get("authorization");

    if (!idToken) {
        res.status(401);
        res.end();
    } else {
        idToken = idToken.substring(7);
    }

    authenticationServices.signIn(idToken).then((user) => {
        res.json(user);
    }).catch((customError) => {
        res.status(customError.code);
        res.json(customError.error);
    });
};

const controllers = {
    google: google
};

module.exports = controllers;
