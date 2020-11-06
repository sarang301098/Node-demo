var connection = require("./connection");

var con = connection.con;
 
var update = con.query("DELETE FROM employees where city = 'Las Vegas'", (err, res)=>{
    if(!err){
        console.log("DELETED");

    }
    else{
        console.log(err);
    }
    console.log(`${res.affectedRows} Rows are Affected`);
});