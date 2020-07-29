var express = require('express');

var app = express();

// ----------send index.html as response-----------
app.get('/', (req, res)=>{
    // res.send('Hiii');
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, ()=>{
    console.log('Server Started at : 3000');
});