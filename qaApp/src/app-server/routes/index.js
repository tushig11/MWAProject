const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const saltRounds = 10;

const SECRET = 'Q&A'; // used for jwt

router.post('/signup', function(req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, (err, hash)=> {
    if (err) throw err;
    const token = jwt.sign( {
      email: req.body.email,
      password: hash
    }, SECRET);
    res.status(200).json(token);
  });
});

router.post('/login', function(req, res, next) {
  //const token = jwt.verify(req.token, SECRET);
  console.log("login requested");
  bcrypt.hash(req.body.password, saltRounds, (err, hash)=> {
    if (err) throw err;
    const token = jwt.sign( {
      email: req.body.email,
      password: hash
    }, SECRET);
    console.log(token);
    res.status(200).json(token);
  });
});

module.exports = router;