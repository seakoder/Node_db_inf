function get(req, res) {

    res.status(200);
    res.send('This server is built using Express and \n It is based on the principles of Representational State Transfer(REST) API')

}

function health(req, res){
res.status(200);
res.send({status:'up'});
}


function notFound(req, res) {
    res.send('Not found')
    res.status(404);
}

module.exports = { get, notFound, health };