const { Model } = require("../models/model.model");

const action = (req, res) => {
    const model = new Model("value");
    res.json(model);
};

module.exports = { action };
