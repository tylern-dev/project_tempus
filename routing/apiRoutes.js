var Employee = require('../model/employee.js')
const bodyParser = require('body-parser');

module.exports = function(app){
    
    app.get("/api/employees", function(req, res){
        Employee.findAll().then(function(result){
            res.json(result)
        })
    });
    

}