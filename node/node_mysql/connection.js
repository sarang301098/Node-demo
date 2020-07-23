var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "node",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('Connected!!');
    }
    else{
        console.log('Failed  ' + err);
    }
});

// ---------if any error related to connection---------
// mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_new_password';
// mysql> FLUSH PRIVILEGES;
// mysql> quit

module.exports = mysqlConnection;