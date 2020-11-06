var connection = require("./connection");

var con = connection.con;

var table = con.query("CREATE TABLE employees (id INT, name VARCHAR(255), age INT(3), city VARCHAR(255))",(err, res)=>{
    if(!err){
        console.log("Table Created : ");
    }
    else{
        console.log("ERROR ::  "+err);
    }
});