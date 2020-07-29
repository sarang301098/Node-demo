var express = require('express');
var http = require('http');
var fs = require('fs');

// ----------using express & Http--------------

var app = express();
var server = http.createServer(app);

app.get('/', (req, res)=>{
    res.send('<h1>Express Http Set</h1>')
});

app.get('/task', (req, res)=>{
    fs.readFile('readMe.txt', (err, data)=>{
        res.send(`<h1>${data}</h1>`);
    });
});

app.get('/task/tasks', (req, res)=>{
    fs.readFile('./data.json', (err, data)=>{
        var tasks = JSON.parse(data).task;
        res.send(tasks);
    });
});

server.listen(3000, ()=>{
    console.log('Port 3000 Is Ready For it.');
});
