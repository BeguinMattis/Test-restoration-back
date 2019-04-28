const { OAuth2Client } = require("google-auth-library");
const environment = require("../environments/environment");
const googleClient = new OAuth2Client(environment.google.client_id);
const CustomError = require("../models/custom-error.model").customError;
const User = require("../models/user.model").user;
const jwt = require("jsonwebtoken");

const verifyIdToken = (idToken) => {
    return googleClient.verifyIdToken({
        idToken: idToken,
        audience: environment.google.client_id
    });
};

const generateToken = (id, days) => {
    const exp = new Date();
    exp.setDate(exp.getDate() + days);

    return jwt.sign({
        id: id,
        exp: parseInt(exp.getTime() / 1000)
    }, environment.token.secret);
};

const signIn = (idToken) => {
    return new Promise((resolve, reject) => {
        verifyIdToken(idToken).then((response) => {
            const payload = response.getPayload();
            const audience = payload.aud;

            if (audience !== environment.google.client_id) {
                const error = new Error("The value of the audience is not equal to the value of the client_id of Google!");
                const customError = new CustomError(500, error);
                console.error("Error: " + customError.error.message);
                reject(customError);
            } else {
                User.findOneAndUpdate({email: payload.email},
                    {
                        family_name: payload.family_name,
                        given_name: payload.given_name,
                        email: payload.email,
                        picture: payload.picture
                    }, {upsert: true, new: true, fields: {__v: 0}}
                ).then((user) => {
                    const response = {
                        family_name: user.family_name,
                        given_name: user.given_name,
                        email: user.email,
                        picture: user.picture,
                        token: generateToken(user._id, 7)
                    };
                    resolve(response);
                }).catch((error) => {
                    const customError = new CustomError(500, error);
                    console.error("Error: " + customError.error.message);
                    reject(customError);
                });
            }
        }).catch((error) => {
            const customError = new CustomError(500, error);
            console.error("Error: " + customError.error.message);
            reject(customError);
        });
    });
};

const services = {
    signIn: signIn
};

module.exports = services;
