const reviewRepo = require('../repositories/reviewRepo');

const post = async (req, res) => {

    try {
        const productId = req.params.id;
        req.body.productId = productId;
        await reviewRepo.create(req.body);
        res.status(200).json({ message: 'successful' })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }


}

module.exports = { post };