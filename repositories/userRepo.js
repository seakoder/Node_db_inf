const userModel = require('../models/userModel');

const signup = (data) => {
    const user = new userModel(data);
    return user.save();
}

const getUserByEmail = (email) => {
    return userModel.findOne({ email: email }, { email: 1, password: 1, firstName:1, lastName:1, role:1 })
}

module.exports = { signup, getUserByEmail };