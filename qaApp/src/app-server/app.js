const express = require('express');
const bearer = require('express-bearer-token');
const cors = require('cors');
const mongo = require('mongodb').MongoClient;
const client = new mongo('mongodb://localhost:27017');

let db;
var indexRouter = require('./routes/index');
var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bearer());
app.use((req,res,next)=>{
    if(!db){
        client.connect( err => {
            db = client.db('qaapp');
            req.db = db;
            next();
        })
    } else{
        req.db = db;
        next();
    }
})

app.use('/', indexRouter);

app.listen(4300, ()=>console.log("listening on 4300"));