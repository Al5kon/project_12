/* eslint-disable no-console */
/* eslint-disable quotes */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */

const express = require('express');

const path = require('path');

const fs = require('fs');

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/users', (req, res) => {
  const userPath = path.join(__dirname, './data/users.json');
  fs.readFile(userPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
    res.end();
  });
});

app.get('/cards', (req, res) => {
  const CardPath = path.join(__dirname, './data/cards.json');
  fs.readFile(CardPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
    res.end();
  });
});


app.get('/users/:_id', (req, res) => {
  const userPath = path.join(__dirname, './data/users.json');

  fs.readFile(userPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const users = JSON.parse(data);
    let success = false;
    for (let i = 0; i < users.length; i++) {
      if (req.params._id === users[i]._id) {
        res.json(users[i]);
        success = true;
      }
    }
    if (!success) {
      res.status(404).json({ "message": "Нет пользователя с таким id" });
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
