
const http = require('http');  //common Js module pattern
const fileSystem = require('fs');
function handler(req, res) {

    switch (req.url) {
        case '/':
            const content = fileSystem.readFileSync('index.html');
            res.write(content);
            break;
        case '/books':
            res.write('These are books');
            break;
        case '/products':
            const products = [{ id: 1, brand: 'Apple', price: 200 },
            { id: 2, brand: 'Samsung', price: 500 },
            { id: 3, brand: 'Nokia', price: 400 }];
            res.write(JSON.stringify(products));
            break;
        case '/listing':
            res.write('list is not that big');
            break;
        default:
            res.write('you have reched the default page');
    }
    res.end();

}
const server = http.createServer(handler);

server.listen(3000, () => console.log('server is running'));

