const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl')
const reviewCtrl = require('../controllers/reviewCtrl');

router.get('/page/:page/limit/:limit', productCtrl.get )

// when page and limit are not defined by user
router.get('/', productCtrl.get)

router.get('/:id', productCtrl.getById)

router.post('/',productCtrl.post )

router.post('/:id/reviews', reviewCtrl.post)

router.delete('/:id', productCtrl.remove)

router.put('/:id', productCtrl.update)

router.patch('/:id', productCtrl.patch)

module.exports = router;