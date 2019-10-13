/* eslint-disable no-useless-return */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
const router = require('express').Router();

const path = require('path');

const fs = require('fs');

const userPath = path.join(__dirname, '../data/users.json');
function errMessage(err) {
  if (err) {
    console.log(err);
    return;
  }
}

router.use('/:_id', (req, res) => {
  fs.readFile(userPath, { encoding: 'utf8' }, (err, data) => {
    errMessage(err);
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

router.use('/', (req, res) => {
  fs.readFile(userPath, { encoding: 'utf8' }, (err, data) => {
    errMessage(err);
    res.send(data);
  });
});

module.exports = router;
