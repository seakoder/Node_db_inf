function get(req, res) {

    res.status(200);
    res.send('this is shown using express and defaultCtrl')

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