const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    family_name: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    picture: {
        type: String,
        required: false
    }
}, {
    collection: 'User'
});

const userModel = mongoose.model('User', userSchema);

const models = {
    user: userModel
};

module.exports = models;
