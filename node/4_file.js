var fs = require('fs');

// -------Block code-----------
// var read = fs.readFileSync('readMe.txt', 'utf-8');
// fs.writeFileSync('writeMe.txt', read);

// ---------non block-------------
fs.readFile('readMe.txt', 'utf-8', function(err, data){
    // console.log(data);
    fs.writeFile('writeMe.txt', data , function(){
        console.log('File is Made :');
    });
});

// --------delete files--------------
// fs.unlink('writeMe.txt', function(){
//     console.log('Deleted!');
// });