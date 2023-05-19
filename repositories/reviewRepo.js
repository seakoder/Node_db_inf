const reviewModel = require('../models/reviewModel');

const create = async(data) =>{
    const review = new reviewModel(data);
    return review.save();
}

const get = (id) => reviewModel.find({productId:id}, {__v:0, _id:0})

module.exports = {create, get}