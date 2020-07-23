var http = require('http');
var fs = require('fs');

// ---------for bufftrstream data------------
var myStreambuffer = fs.createReadStream(__dirname + '/readMe.txt');

// ------------for Real file data needs to encode utf8-----------------
var myStreamdata = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');

// -----as fs.createReadStream is an event we needs to on the event------------

myStreambuffer.on('data', (buffer)=>{
    console.log('Buffer Data Stream : ');
    console.log(buffer);
});


myStreamdata.on('data', (real)=>{
    console.log('RealFile Data : ');
    console.log(real);
});