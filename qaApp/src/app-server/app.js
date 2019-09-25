const express = require('express');
const bearer = require('express-bearer-token');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const uri = process.env.ATLAS;
const client = new MongoClient(uri, { useNewUrlParser: true });

let db;
const indexRouter = require('./routes/index');
const profileRouter = require('./routes/profile');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bearer());
app.use((req,res,next)=>{
    if(!db){
        client.connect( err => {
            db = client.db('qaapp');
            req.db = db;
            req.userCollection = db.collection("users");
            req.questionCollection = db.collection("questions");
            next();
        })
    } else{
        req.db = db;
        req.userCollection = db.collection("users");
        req.questionCollection = db.collection("questions");
        next();
    }
})

app.use('/', indexRouter);
app.use('/profile', profileRouter);

app.listen(4300, ()=>console.log("listening on 4300"));