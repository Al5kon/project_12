/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

const express = require('express');

const path = require('path');

const router = require('./routes/users.js');

const routerCards = require('./routes/cards.js');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', router);
app.use('/cards', routerCards);
app.use((req, res) => {
  res.status(404).json({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
