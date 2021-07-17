const { Router } = require('express');
const {
  addOrder,
} = require('./ordersControllers');

const router = Router();

router.post('/buy', addOrder('BUY'));
router.post('/sell', addOrder('SELL'));

module.exports = router;
