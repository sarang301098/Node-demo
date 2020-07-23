var http = require('http');
var fs = require('fs');

// ---------for bufftrstream data------------
var myStreambuffer = fs.createReadStream(__dirname + '/readMe.txt');
var mywritebuffer = fs.createWriteStream(__dirname + '/writeMe.txt');

// ------------for Real file data needs to encode utf8-----------------
// var myStreamdata = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
// var mywritedata = fs.createWriteStream(__dirname + '/writeMe.txt');


// -----as fs.createReadStream is an event we needs to on the event------------

myStreambuffer.on('data', (buffer)=>{
    console.log('Buffer Data Received : ');
    console.log(buffer);
// --------Here data is received as buffer but it write on file as simple data what we get from ReadStream.txt----------------
    mywritebuffer.write(buffer);
});


// myStreamdata.on('data', (real)=>{
//     console.log('RealFile Data : ');
//     console.log(real);
// // -------Here we get real data and write it as same as we received from ReadStream.txt-----------------
//     mywritedata.write(real);
// });