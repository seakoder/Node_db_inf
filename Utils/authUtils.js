const jwt = require('jsonwebtoken');
const userEnums = require('./enums');

async function authenticate(req, res, next) {

    try {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(401).json('Not i authorized');

        } else {
            const tokens = authorization.split(' ');
            const authtoken = tokens[1];
            const results = await jwt.verify(authtoken, 'secretkey');
            req.role = results.role;
            if (results) {
                next();
            } else {
                res.status(401).json('Not Authorized');
            }
        }

    } catch (error) {
        res.status(401).json({ message: 'Not Authorized' })
    }
}

async function authorize(req,res,next){
if(req.body.role ==userEnums.Admin){
    next();
}else {
    res.status(401).json({message: 'Forbidden'})
}
};

module.exports = { authenticate , authorize}