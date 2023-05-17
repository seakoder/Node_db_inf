function get(req,res){
    res.status(200).send('You are here via express');
}

function health(req,res){
    res.status(200).send({status:'Up'});

}

function notFound(req,res){
    res.send('Does not exist')
}

module.exports = {get, health,notFound};