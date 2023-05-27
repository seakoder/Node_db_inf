const userRepo = require('../repositories/userRepo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userEnums = require('../Utils/enums');

const signup = async (req, res) => {

    try {
        req.body.role=userEnums.User;
        req.body.password = await bcrypt.hash(req.body.password, 1);
        await userRepo.signup(req.body);
        res.status(200).json({ message: 'Creation successful' })
    } catch (error) {
        if (error.message.indexOf('duplicate key error') > -1) {
            res.status(404).json({ message: 'email already exists' })
        } else {
            console.log(error);
            res.status(500).json({ message: 'Server error' })
        }
    }
}

const signIn = async (req, res) => {

    try {
        const email = req.body.email;
        const password = req.body.password;
        // const {email, password} = req.body;
        const newuser = await userRepo.getUserByEmail(email);
        if (!newuser) {
            res.status(401).json({ message: 'Not Found' })
            return;
        }
        const result = await bcrypt.compare(password, newuser.password)
        if (result) {
            const payload = {...newuser._doc};
            delete payload.password;
            const token = jwt.sign(payload, 'secretkey', {})
            res.status(200).json({token});
        } else {
            res.status(401).json({ message: 'Not yet Authorized' })
        }

    } catch (error) {
        res.status(500).json({ message: 'internal server error' })

    }
}

module.exports = { signup, signIn };


