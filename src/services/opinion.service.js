const CustomError = require("../models/custom-error.model").customError;
const User = require("../models/user.model").user;
const Opinion = require("../models/opinion.model").opinion;

const listOpinions = (userId) => {
    return new Promise((resolve, reject) => {
        Opinion.find({"user_id": userId}, {"__v": 0}).then((opinions) => {
            resolve(opinions);
        }).catch((error) => {
            const customError = new CustomError(500, error);
            console.error("Error: " + customError.error.message);
            reject(customError);
        });
    })
};

const addAttribute = (object, propertry, name, opinion) => {
    if ((name) && (opinion)) {
        object[propertry] = [{
            name: name,
            opinion: opinion
        }];
        console.log("ok");
    } else {
        object[propertry] = null;
        console.log("pas ok");
    }

    return object;
};

const addOpinion = (userId, data) => {
    return new Promise((resolve, reject) => {
        let opinion = new Opinion();
        opinion.user_id = userId;
        opinion.place_id = "place_id";

        console.log(data);

        opinion = addAttribute(opinion, "starters", data.starterName, data.starterOpinion);
        opinion = addAttribute(opinion, "main_courses", data.mainCourseName, data.mainCourseOpinion);
        opinion = addAttribute(opinion, "desserts", data.dessertName, data.dessertOpinion);

        opinion.save().then(() => {
            resolve(true);
        }).catch((error) => {
            console.error(error);

            const customError = new CustomError(500, error);
            // console.error("Error: " + customError.error.message);
            reject(customError);
        });
    })
};

const services = {
    listOpinions: listOpinions,
    addOpinion: addOpinion
};

module.exports = services;
