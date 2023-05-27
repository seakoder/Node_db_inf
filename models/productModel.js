const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    brand:{type:String, minLength:[3, 'need a minimum of 3 chars'],required: true},
    name:{type:String, maxLength:[15, 'not more than 15 chars'],required:true},
    price: {type:Number, required:true},
    inStock: {type:Boolean, default:false},
    discount: Number,
    image: String,
    createdDate: Date,
    updatedDate: {type:Date, default: Date.now }
});

const model = mongoose.model('product', schema);


module.exports = model;