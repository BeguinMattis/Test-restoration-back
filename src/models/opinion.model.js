const mongoose = require("mongoose");

const singleOpinionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    opinion: {
        type: String,
        required: true
    }
});

const globalOpinionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    place_id: {
        type: String,
        required: true
    },
    starters: {
        type: [singleOpinionSchema],
        required: false
    },
    main_courses: {
        type: [singleOpinionSchema],
        required: false
    },
    desserts: {
        type: [singleOpinionSchema],
        required: false
    }
}, {
    collection: "Opinion"
});

const opinionModel = mongoose.model("Opinion", globalOpinionSchema);

const models = {
    opinion: opinionModel
};

module.exports = models;
