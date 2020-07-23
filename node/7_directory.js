var fs = require('fs');


// -------make dir-------
// fs.mkdirSync('stuff');

// -------remove dir----------
// fs.rmdirSync('stuff');

// ------make file in dir-----------
fs.mkdir('stuff', ()=>{
    fs.readFile('readMe.txt', 'utf-8', (err, data)=>{
        fs.writeFile('./stuff/writeMe.txt', data, ()=>{
            console.log('Done!');
        });
    });
});

// --------remove dir------------
// fs.unlink('./stuff/writeMe.txt', ()=>{
//     fs.rmdir('stuff', ()=>{
//         console.log('Done');
//     });
// });