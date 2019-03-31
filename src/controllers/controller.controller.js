const Model = require("../models/model.model").Model;

const action = (req, res) => {
    const model = new Model("value");
    res.json(model);
};

const controllers = {
    action: action
};

module.exports = controllers;
