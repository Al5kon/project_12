const routerCards = require('express').Router();

const path = require('path');

const fs = require('fs');

routerCards.get('/', (req, res) => {
  const CardPath = path.join(__dirname, '../data/cards.json');
  fs.readFile(CardPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
});

module.exports = routerCards;
