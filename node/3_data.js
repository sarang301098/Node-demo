var fs = require('fs');
// var data = fs.readFileSync('text.txt');
// console.log(data.toString());


var data = fs.readFile('text.txt', function(err, data){
    if(err){
        console.log(err);
    }
   else{
    console.log(data);
   }
  
});
// console.log(data.toString());