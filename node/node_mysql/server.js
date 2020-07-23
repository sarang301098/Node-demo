var express = require('express');
var bodyparser = require('body-parser');
var  mysqlConnection = require('./connection');
var peopleRouts = require('./routs/people');

var app = express();
app.use(bodyparser.json());

app.use('/people', peopleRouts);



app.listen(3000, ()=>{
    console.log('Server Started at : 3000');
});