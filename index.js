const x = require('express');
const defaultRouter = require('./Routes/defaultRouter')
const productRouter = require('./Routes/productRouter');
const defaultCtrl = require('./controllers/defaultCtrl')
const a = x();
const mongoose = require('mongoose');
const userRouter = require('./Routes/userRouter');
const jwt = require('jsonwebtoken');
const authUtils = require('./Utils/authUtils');
const morgan = require('morgan');
// const dotenv = require("dotenv");
// dotenv.config();

const fileSystem = require('fs');

// If the logs is deleted- create a logs directory/folder by default
if (!fileSystem.existsSync('logs')) {
    fileSystem.mkdirSync('logs');
}
const logFile = fileSystem.createWriteStream('./logs/first.log', { flags: 'a' })

a.use(morgan('combined', { stream: logFile }));
a.use(morgan('dev'));

// const connectionStr = ;

// System Restart is required after setting Environment variables in windows
mongoose.connect(process.env.dbUrl)

a.use(x.static('uploads/'))

// const dbUrl= 'mongodb+srv://test-user:test-user@cluster0.qjporll.mongodb.net/newbase?retryWrites=true&w=majority';

// mongoose.connect(dbUrl);

// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
// }
// mongoose.connect(dbUrl, connectionParams).then(()=>{
//     console.log('connected via mongo Atlas')
// }).catch((err) => console.log('Not working'));


const PORT = process.env.PORT || 3002;
// a.use('/', x.static('images'));

a.listen(PORT, () => console.log('this is dummy text'));
a.use(x.json());
a.use('/', defaultRouter);

a.use(authUtils.authenticate);
a.use('/api/users', userRouter)
a.use('/health', defaultRouter);
a.use('/api/products', productRouter)
a.get('*', defaultCtrl.notFound);


// a.use('/ejs', (req, res) => res.render('index.ejs'));
// a.use('/rawNode', (req, res) => {
//     const content = fileSystem.readFileSync('index.html')
//     res.write(content);
//     res.end()
// });



// db.cities.aggregate(
//     {$match:{state: 'MA'}},
//     {$group: {_id: '$state', totalpop:{$sum: '$pop'}}}
//     )

//     db.cities.aggregate(
//         {$group:{_id: '$state', totalpop: '$pop'}},
//         {$sort: {totalpop:-1}},
//         {$limit:7}
//     )