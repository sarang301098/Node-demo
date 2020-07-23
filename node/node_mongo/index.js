var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node', { useUnifiedTopology: true , useNewUrlParser: true }, (err)=>{
    if(!err){
        console.log('Connected');
    }
    else{
        console.log('Error :::::'+ err);
    }
});