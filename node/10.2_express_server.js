var express = require('express');
// var http = require('http');
var app = express();

// ------------simple server-----------
app.get('/', (req, res)=>{
    res.send('<h1>Express Done</h1>');
});

// -----------rout to /task-------------
app.get('/task', (req, res)=>{
    res.send('<h1>Task Works</h1>');
});

// ----------listen to server----------
app.listen(3000, ()=>{
    console.log('Port 300 Is activated.')
});