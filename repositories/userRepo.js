const userModel = require('../models/userModel');

const signup = (data) =>{
    const user = new userModel(data);
    return user.save();
}

module.exports = {signup};