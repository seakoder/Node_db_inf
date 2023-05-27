const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl')
const reviewCtrl = require('../controllers/reviewCtrl');
const authUtil = require('../Utils/authUtils')
const uploadConfig = require('../Utils/uploadConfig')

router.get('/page/:page/limit/:limit', productCtrl.get )

// when page and limit are not defined by user
router.get('/', productCtrl.get)

router.get('/:id', productCtrl.getById)

router.post('/', uploadConfig.single('image'), productCtrl.post )

router.post('/:id/reviews', reviewCtrl.post)

router.delete('/:id', authUtil.authorize, productCtrl.remove)

router.put('/:id', productCtrl.update)

router.patch('/:id', productCtrl.patch)

module.exports = router;