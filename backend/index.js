const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const MongoClient = require("mongodb").MongoClient;

const PORT = process.env.PORT || 4000;

const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb+srv://shkiper195:shkiper195@cluster0-av1ng.mongodb.net/instagram-app");

let dbposts;
let dbmy_posts;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.get('/posts', function(req, res) {
	const collection = dbposts;
    collection.find({}).toArray(function(err, data){
        if(err) return console.log(err);
        res.send(data)
    });
});

app.get('/my-posts', function(req, res) {
	const collection = dbmy_posts;
    collection.find({}).toArray(function(err, data){
        if(err) return console.log(err);
        res.send(data)
    });
});

mongoClient.connect(function(err, database) {
    if(err) return console.log(err);
    dbposts = database.db("instagram-app").collection("posts");
    dbmy_posts = database.db("instagram-app").collection("my-posts");
    app.listen(PORT);
    console.log("Сервер запустился...");
});

