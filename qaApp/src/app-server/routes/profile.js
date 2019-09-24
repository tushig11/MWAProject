const express = require('express');
const multer = require('multer');
const DIR = './uploads/'
const router = express.Router();
const upload = multer({dest:DIR});
const jwt = require('jsonwebtoken');
require('dotenv').config();



router.post('/upload', validateToken, upload.single('avatar'), (req, res, next) => {
    
    var path = '';
    upload(req, res, function (err) {
       if (err) {
         // An error occurred when uploading
         console.log(err);
         return res.status(422).send("an Error occured")
       }  
      // No error occured.
       path = req.file.path;
       return res.send("Upload Completed for "+ path); 
 });     
})

router.get('/questions', validateToken, (req,res,next) => {
    console.log("Accepted")
    res.json({message:"You got me"})
})

function validateToken(req, res, next){
    jwt.verify(req.token, process.env.SECRET, function(err, decoded) {
        if(err)
            res.json({message:"Invalid Token"})
        else
            next();
    });
}
module.exports = router;