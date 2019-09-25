const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
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
    req.userCollection.count().then(
      data => {
        req.userCollection.insertOne({
          _id: data+1,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: hash
        })
      }
    )
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



router.get('/topics', validateToken, (req, res, next) => {
    req.topicCollection.find().toArray((err,data) => {
        const topics = data.map(x=>x.name);
        res.json(topics);
    })
})

router.get('/questions', validateToken, (req, res, next) => {
  req.questionCollection.find().toArray((err,data) => {
      res.json(data);
  })
})

router.get('/questions/:id', validateToken, (req, res, next) => {
  req.questionCollection.findOne({_id:req.params.id}).then(
    data => {
      res.json(data);
  })
})

router.post('/questions/add', validateToken, (req, res, next) => {

  req.questionCollection.count().then(
    data => req.questionCollection.insertOne({_id:data+1, ...req.body,answer:[]})
  )
  res.json({message:"Question added Successfully"});
})

router.patch('/answer/add', validateToken, (req, res, next) => {
  req.questionCollection.updateOne( { _id : parseInt(req.body.qid) }, { $push: { "answer": req.body.obj } });
  res.json({message:"Answer added Successfully"});
})

router.patch('/vote/add', validateToken, (req, res, next) => {
  req.questionCollection.updateOne( { _id : parseInt(req.body.qid) }, { answer: {$push: { "vote": req.body.obj }}});
  res.json({message:"Vote added Successfully"});
})

function validateToken(req, res, next){
  jwt.verify(req.token, SECRET, function(err, decoded) {
      if(err)
          res.json({message:"Invalid Token"})
      else
          next();
  });
}
module.exports = router;