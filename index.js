const x = require('express');
const getProducts = require('./controllers/productCtrl')
const {notFound, health} = require('./controllers/defaultCtrl')
const defaultRouter = require('./Routes/defaultRouter')
const productRouter = require('./Routes/productRouter');
const a = x();

const PORT = process.env.PORT || 3000;

a.listen(PORT, ()=> console.log('this is dummy text'));
a.use(x.json());
a.use('/' , defaultRouter);
a.use('/api/products', productRouter);
a.get('/health', health);
a.get('*', notFound);