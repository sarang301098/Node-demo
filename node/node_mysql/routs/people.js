var express = require('express');
var router = express.Router();

var  mysqlConnection = require('../connection');

router.get('/', (req, res)=>{
    mysqlConnection.query("select * from Persons", (err, row, fields)=>{
        if(!err){
            res.send(row);
        }
        else{
            console.log(err);
        }
    });
});

module.exports  = router;