var connection = require("./connection");

var con = connection.con;

var values =  [  
    ['1', 'Bharat Kumar', '25', 'Mumbai'],  
    ['2', 'John Cena', '35', 'Las Vegas'],  
    ['3', 'Ryan Cook', '15', 'CA']  
    ]; 
var insert = con.query("INSERT INTO employees (id, name, age, city) VALUES ?", [values], (err, res)=>{
    if(!err){
        console.log("INSERTED");

    }
    else{
        console.log(err);
    }
    console.log(`${res.affectedRows} Rows are Affected`);
});