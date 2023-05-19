const userRepo = require('../repositories/userRepo');
const bcrypt = require('bcrypt');

const signup = async (req,res) =>{

try {
    req.body.password = await bcrypt.hash(req.body.password, 1);
    await userRepo.signup(req.body);
    res.status(200).json({message: 'Creation successful'})
} catch (error) {
    if(error.message.indexOf('duplicate key error') > -1){
    res.status(404).json({message: 'email already exists'})
}else {
    console.log(error);
    res.status(500).json({message: 'Server error'})
}
}
}

module.exports = {signup};