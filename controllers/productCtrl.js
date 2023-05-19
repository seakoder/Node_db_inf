
const productRepo = require('../repositories/productRepo')
const reviewRepo = require('../repositories/reviewRepo')

const get = async (req, res) => {
    try {
        let page = +req.params.page || 1;
        let limit = +req.params.limit || 10;
        let sort = req.query.sort || 'updatedDate';
        let direction = req.query.direction || 'desc';
        let search = req.query.search;

        const data = await productRepo.get(page, limit, sort, direction, search);
        const count = await productRepo.getCount(search);
        const totalPages = Math.ceil(count / limit);
        const response = {
            metadata: {
                pages: totalPages,
                count
            },
            data
        }
        res.status(200);
        res.json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }

}

const post = async (req, res) => {
    try {

        req.body.createdDate = new Date();
        await productRepo.add(req.body);
        res.status(200).json({ message: 'Created' });

    } catch (error) {
        console.log(error);
        if (error.message.indexOf('product validation failed') > -1) {
            res.status(400).json({ message: 'Bad Request' });
        } else {
            res.status(500).json({ message: 'Internal Server Error' })

        }

    }
}
const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await productRepo.getById(id);

        if (product) {
            const reviews = await reviewRepo.get(id);
            const Response = { ...product._doc, reviews }
            res.status(200);
            res.json(Response);
        } else {
            res.status(404);
            res.json({ message: 'Not found' });
        }
    } catch (err) {
        res.status(500);
        res.json({
            message: 'Internal Error'
        });
    }
};

const remove = async (req, res) => {
    const id = req.params.id;
    await productRepo.remove(id);
    res.status(200).send('Not Found');
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await productRepo.update(id, data)
    res.status(204).send();
}

const patch = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    await productRepo.patch(id, data);
    res.send(204).send();
}
module.exports = { get, post, getById, remove, update, patch }