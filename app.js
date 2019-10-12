/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
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

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
