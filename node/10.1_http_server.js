var http = require('http');

var server = http.createServer((req, res)=>{
    console.log('request was made at '+ req.url);
    // --------for add the headrs---------------
    res.writeHead(200, { 'Content-Type' : 'text/plain/javascript'});   // To see the headers you need to go "inspect" on browser and then go to "networks" and reload the browser
    res.end('Hi There!');
});

// --------listen server by ip of localhost----------------
// server.listen(3000, '127.0.0.1', ()=>{
//     console.log('server started on : 127.0.0.1:3000');
// });

server.listen(3000, 'localhost', ()=>{
    console.log('server started on :3000');
});