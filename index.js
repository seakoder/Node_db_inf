const x = require('express');
const getProducts = require('./controllers/productCtrl')
const {notFound, health} = require('./controllers/defaultCtrl')
const defaultRouter = require('./Routes/defaultRouter')
const productRouter = require('./Routes/productRouter');
const a = x();

a.listen(3000, ()=> console.log('this is a'));
a.use(x.json());

a.use('/' , defaultRouter);
a.use('/api/products', productRouter);

a.get('/health', health);
a.get('*', notFound);