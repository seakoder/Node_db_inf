const Product = require('../models/productModel');

const get = () => {
    return Product.find({}, { __v: 0 });
}

const add = (data) => {
    const product = new Product(data);
    return product.save();
}

const getById = (id) => Product.findById(id, { __v: 0 });
// const getById = (id)=> Product.findOne({_id:id},{__v:0});

const remove = (id) => Product.findByIdAndRemove(id);

module.exports = { get, add, getById, remove };