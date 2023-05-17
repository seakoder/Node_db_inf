const Product = require('../models/productModel');

const get = (page, limit) => {
    const pagesToSkip = (page-1) * limit;
    return Product.find({}, { __v: 0 }).limit(limit).skip(pagesToSkip);
}

const getCount = () => {
    return Product.count();
}
const add = (data) => {
    const product = new Product(data);
    return product.save();
}

const getById = (id) => Product.findById(id, { __v: 0 });
// const getById = (id)=> Product.findOne({_id:id},{__v:0});

const remove = (id) => Product.findByIdAndRemove(id);

const update = (id, data) => Product.findByIdAndUpdate(id, data);

const patch = async (id, data) => {
    const newdata = await Product.findById(id);
    delete data._id; 
    for (let key in data) {
        newdata[key] = data[key];
    }
    Product.findByIdAndUpdate(id, newdata);
}
module.exports = { get, add, getById, remove, update, patch, getCount};