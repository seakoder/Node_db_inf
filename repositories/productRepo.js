const Product = require('../models/productModel');

function getSortField(sort){
    switch(sort.toLowerCase()){
        case 'brand':
        case 'model':
        case 'price':
        case 'createdDate':
        case 'updatedDate':
        case 'discount':
            return sort.toLowerCase();
            default:
                return 'updatedDate';
    }
}
function getSortDirection(direction){
    switch(direction.toLowerCase()){
        case 'asc':
            return 1;
        case 'desc':
        return -1;
        default:
            return 1;
    }
}

const get = (page, limit, sort,direction, search) => {

    const searchingFilter = {
        $or: [
            { brand: new RegExp(search, 'i') },
            { model: new RegExp(search, 'i') }
        ]
    };

    let sortingFilter = getSortField(sort);
    let dir = getSortDirection(direction);
    const pagesToSkip = (page-1) * limit;
    return Product.find(searchingFilter, { __v: 0 }).sort({[sortingFilter] : dir}).limit(limit).skip(pagesToSkip);
}

const getCount = (search) => {
    const searchingFilter = {
        $or: [
            { brand: new RegExp(search, 'i') },
            { model: new RegExp(search, 'i') }
        ]
    };
    return Product.count(searchingFilter);
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