const { Router } = require('express');
const {
  addOrder,
} = require('./ordersControllers');

const router = Router();

router.post('', addOrder);

module.exports = router;
