const path = require('path');
const connection = require(path.join(__dirname, './connection.js'))


let orm = {
    select: function (selector, selectTable){
        var queryString = "select ?? from ??";
        connection.query(queryString, [selector, selectTable], (err, result)=>{
            return result;
        })
    }
    // newUser: function (tableName, firstName, lastName, userName, password){
    //     var queryString = "insert into ?? values ("
    // }
}

module.exports = orm;