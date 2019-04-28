const Model = require("../models/model.model").model;

const action = (req, res) => {
    const model = new Model("value");
    res.json(model);
};

const controllers = {
    action: action
};

module.exports = controllers;
