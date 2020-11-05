var connection = require("./connection");

var con = connection.con;
 
var update = con.query("UPDATE employees SET city = 'Delhi' where city = 'CA'", (err, res)=>{
    if(!err){
        console.log("UPDATED");

    }
    else{
        console.log(err);
    }
    console.log(`${res.affectedRows} Rows are Affected`);
});