var connection = require("./connection");

var con = connection.con;
 
var select = con.query("SELECT * FROM employees", (err, res)=>{
    if(!err){
        console.log(res);
    }
    else{
        console.log(err);
    }
    console.log(`${res.affectedRows} Rows are Affected`);
});