const opinionServices = require("../services/opinion.service");

const list = (req, res) => {
    const userId = req.payload.id;

    opinionServices.listOpinions(userId).then((opinions) => {
        res.json(opinions);
    }).catch((customError) => {
        res.status(customError.code);
        res.json(customError.error);
    });
};

const add = (req, res) => {
    const userId = req.payload.id;
    const data = req.body;

    if (!(data)) {
        res.status(400);
        res.end();
    }

    opinionServices.addOpinion(userId, data).then(() => {
        res.status(200);
        res.end();
    }).catch((customError) => {
        res.status(customError.code);
        res.json(customError.error);
    });
};

const controllers = {
    list: list,
    add: add
};

module.exports = controllers;
