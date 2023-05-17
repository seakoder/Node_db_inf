const x = require('express');
 const defaultRouter = require('./Routes/defaultRouter')
const productRouter = require('./Routes/productRouter');
const defaultCtrl = require('./controllers/defaultCtrl')
const a = x();
const mongoose = require('mongoose');

// const fileSystem = require('fs');

const connectionStr= 'mongodb://127.0.0.1:27017/newbase';
mongoose.connect(connectionStr);

const PORT = process.env.PORT || 3002;
// a.use('/', x.static('images'));

a.listen(PORT, () => console.log('this is dummy text'));
a.use(x.json());
a.use('/', defaultRouter);
a.use('/api/products', productRouter)
a.use('/health', defaultRouter);
a.get('*', defaultCtrl.notFound);




// a.use('/ejs', (req, res) => res.render('index.ejs'));
// a.use('/rawNode', (req, res) => {
//     const content = fileSystem.readFileSync('index.html')
//     res.write(content);
//     res.end()
// });