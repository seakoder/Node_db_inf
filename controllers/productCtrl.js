

const products = [{ id: 1, brand: 'Apple', price: 200, availability: 'National', production: "Discontinued" },
{ id: 2, brand: 'Samsung', price: 600 },
{ id: 3, brand: 'Nokia',price: 400, image: 'https://images.indianexpress.com/2022/09/VivoV25Pro_LEAD.jpg',availability: 'International', production: "Ongoing" },
{ id: 4, brand: 'Lenovo', price: 80,availability: 'National', production: "Discontinued" },
{ id: 5, brand: 'HTC', price: 1500,availability: 'International', production: "Ongoing" },
{ id: 6, brand: 'Dell', price: 2200, availability: 'National', production: "Discontinued" },
{ id: 7, brand: 'Sony', price: 5300 ,availability: 'International', production: "Ongoing"},];

function get(req, res) {

    res.status(200);
    res.json(products);
}

function getById(req, res) {
    const id = req.params.id;
    const product = products.find(i => i.id == id);
    
    if(product) {
    res.status(200);
    res.json(product);
}else {
    res.status(404);
    res.send('Not Found');
}
}

function create(req, res) {
    const payload = req.body;
    products.push(payload);
    res.send('created');
    res.status(201);
}

function remove(req,res){
    const id = req.params.id;
    for(let i=0; i<products.length; i++){
        if(products[i].id ==id){
            products.splice(i,1);
            res.status(204);
            res.send('Deleted')
            return;
        }
    } res.status(404);
    res.send("Not found");
}

function update(req,res){
id = req.params.id;

const product = products.find(p=> p.id==id);
if(product){
    product.brand= req.body.brand;
    product.price= req.body.price;
    res.status(204).send("Done");

}else {
    res.status(404).send('Not Found product');
}

}

function patch(req,res){
    const id = req.params.id;
    const product = products.find(p=> p.id == id);
if(product){
    for(let key in req.body){
        product[key] = req.body[key];
        res.status(204).send();
    }
} else {
    res.status(404)
.json({message: 
'Not Found'})}

}

module.exports = { get, getById, create,remove,update,patch };