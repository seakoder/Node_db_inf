const x = require('express');
const getProducts = require('./controllers/productCtrl')
const {notFound, health} = require('./controllers/defaultCtrl')
const defaultRouter = require('./Routes/defaultRouter')
const productRouter = require('./Routes/productRouter');
const a = x();

const fileSystem = require('fs');

const PORT = process.env.PORT || 3000;
a.use('/', x.static('images'));

a.listen(PORT, ()=> console.log('this is dummy text'));
a.use(x.json());
a.use('/' , defaultRouter);
a.use('/ejs' , (req,res)=> res.render('index.ejs'));
a.use('/rawNode' , (req,res) => {
    const content = fileSystem.readFileSync('index.html')
    res.write(content);
    res.end()
});


a.use('/api/products', productRouter);
a.get('/health', health);
a.get('*', notFound);