require('dotenv').config();
const express = require('express');
const router = require('./components/products/productsRoutes');

const app = express();
app.use(express.json());

app.use('/products', router);

app.listen(process.env.NODE_DOCKER_PORT, () => {
  console.log(`application running on port ${process.env.NODE_DOCKER_PORT}`);
});
