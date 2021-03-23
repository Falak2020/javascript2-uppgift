const router = require('express').Router();
const cartModel = require('./models/shoppingCart/cartModel');

router.post('/add',cartModel.saveProduct);
router.put('/:id', cartModel.updateCart )
router.get('/:id',cartModel.getone)


module.exports = router;