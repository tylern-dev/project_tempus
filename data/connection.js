const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'tempus_db'

});

// connection.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log(`connection ID ${connection.threadId}` )
// })