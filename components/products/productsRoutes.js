const { Router } = require('express');
const {
  getProducts,
  addProducts,
  getProductById,
  updateProductById,
} = require('./productsControllers');

const router = Router();

router.get('', getProducts);

router.post('', addProducts);

router.get('/:id', getProductById);

router.put('/:id', updateProductById);

module.exports = router;
