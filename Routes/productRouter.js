const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productCtrl');

router.get('/', productCtrl.get);
router.get('/:id', productCtrl.getById);
router.post('/', productCtrl.create);
router.delete('/:id', productCtrl.remove);
router.put('/:id', productCtrl.update)
router.patch('/:id', productCtrl.patch);


module.exports = router;