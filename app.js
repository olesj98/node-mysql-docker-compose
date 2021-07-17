require('dotenv').config();
const express = require('express');

const { requestValidator } = require('./middleware/requestValidator');

const productsRouter = require('./components/products/productsRoutes');
const ordersRouter = require('./components/orders/ordersRoutes');

const app = express();
app.use(express.json());

app.use('/products', productsRouter);
app.use('/order', requestValidator, ordersRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

app.listen(process.env.NODE_DOCKER_PORT, () => {
  console.log(`application running on port ${process.env.NODE_DOCKER_PORT}`);
});
