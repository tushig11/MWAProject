const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const saltRounds = 10;

const SECRET = process.env.SECRET; // used for jwt

router.post('/register', function(req, res, next) {
  console.log("Signup requested");
  bcrypt.hash(req.body.password, saltRounds, (err, hash)=> {
    if (err) throw err;
    const token = jwt.sign( {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    }, SECRET);
    req.userCollection.insertOne({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash
    })
    res.status(200).json(token);
  });
});

router.post('/login', function(req, res, next) {
  console.log("login requested");
  req.userCollection.findOne({email:req.body.email}).then(
    user => {
      if(user){
        bcrypt.compare(req.body.password, user.password, function(err, result) {
          if(result){
            const token = jwt.sign(user, SECRET);      
            res.status(200).json(token);
          }
          else { res.json({ message: "Wrong password"}); }
        });
      }else{
        res.json({ message: "User not exits"});
      }
    }
  );
});

module.exports = router;