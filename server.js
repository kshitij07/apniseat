var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
require('dotenv/config');

app.use(bodyParser.json());
//Imports
var busApiRouteController = require('./routecontrollers/buses');

app.use('/buses', busApiRouteController);

app.get('/', (req, res) => {
    res.send("We are on home");
});

//Connect DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => console.log("connected to DB"));

app.listen(3000);