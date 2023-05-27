const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {
        type: String, required: true, unique: true,
        validate: {
            validator(val) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
            },
            message: function (item) {
                return `${item.value} is not valid email`;
            }
        }
    },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: Number, default: 1 },
    createdDate: Date,
    updatedDate: { type: Date, default: Date.now }
});

const userModel = mongoose.model('user', schema);

module.exports = userModel;