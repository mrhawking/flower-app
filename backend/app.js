import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/flowers', async (req, res) => {
  const fileContent = await fs.readFile('./data/flowers.json');
  const flowers = JSON.parse(fileContent);
  res.status(200).json(flowers);
});

// app.get('/flowers', async (req, res) => {
//   const flowers = await fs.readFile('./data/flowers.json', 'utf8');
//   res.json(JSON.parse(flowers));
// });

app.get('/favorite', async (req, res) => {
  const fileContent = await fs.readFile('./data/favorite-flowers.json');
  const flowers = JSON.parse(fileContent);

  res.status(200).json(flowers);
});

app.put('/favorite', async (req, res) => {
  const flowers = req.body;

  await fs.writeFile('./data/favorite-flowers.json', JSON.stringify(flowers));

  res.status(200).json({ message: 'User favorites updated!' });
});

app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null || orderData.items.length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.phone === null ||
    orderData.customer.phone.trim() === '' ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === ''

  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

app.use((req, res) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  res.status(404).json({ message: 'Not found' });
});

app.listen(3000);
