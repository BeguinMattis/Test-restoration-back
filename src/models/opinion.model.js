const mongoose = require("mongoose");

const opinionSchema = new mongoose.Schema({
    place_id: {
        type: String,
        required: true
    },
    starters: [{
        name: {
            type: String
        },
        opinion: {
            type: String
        },
        required: false
    }],
    main_courses: [{
        name: {
            type: String
        },
        opinion: {
            type: String
        },
        required: false
    }],
    desserts: [{
        name: {
            type: String
        },
        opinion: {
            type: String
        },
        required: false
    }]
}, {
    collection: 'Opinion'
});

const opinionModel = mongoose.model('Opinion', opinionSchema);

const models = {
    opinion: opinionModel
};

module.exports = models;
