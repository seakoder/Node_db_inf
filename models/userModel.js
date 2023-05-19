const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {
        type: String, required: true, unique:true
    },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: Date,
    updatedDate: { type: Date, default: Date.now }
});

const userModel = mongoose.model('user', schema);

module.exports = userModel;