const User = require("../models/user.model").user;
const Opinion = require("../models/opinion.model").opinion;
const CustomError = require("../models/custom-error.model").customError;

const listOpinions = (userId) => {
    return new Promise((resolve, reject) => {
        User.findById(userId, {_id: 1}).populate("opinions", {__v: 0}).then((globalOpinions) => {
            globalOpinions = globalOpinions.toObject();
            delete globalOpinions.id;

            globalOpinions.opinions.forEach((globalOpinion) => {
                delete globalOpinion.user_id;
            });

            resolve(globalOpinions);
        }).catch((error) => {
            const customError = new CustomError(500, error);
            console.error("Error: " + customError.error.message);
            reject(customError);
        });
    });
};

const checkSingleOpinions = (singleOpinions) => {
    let singleOpinionsChecked = [];
    singleOpinions.forEach((singleOpinion) => {
        if ((singleOpinion.name) && (singleOpinion.opinion)) {
            singleOpinionsChecked.push(singleOpinion);
        }
    });

    return singleOpinionsChecked;
};

const addOpinion = (userId, globalOpinion) => {
    return new Promise((resolve, reject) => {
        let opinion = new Opinion();
        opinion.user_id = userId;
        opinion.place_id = globalOpinion.place_id;
        opinion.starters = checkSingleOpinions(globalOpinion.starters);
        opinion.main_courses = checkSingleOpinions(globalOpinion.main_courses);
        opinion.desserts = checkSingleOpinions(globalOpinion.desserts);

        opinion.save().then(() => {
            resolve(true);
        }).catch((error) => {
            const customError = new CustomError(500, error);
            console.error("Error: " + customError.error.message);
            reject(customError);
        });
    });
};

const services = {
    listOpinions: listOpinions,
    addOpinion: addOpinion
};

module.exports = services;
