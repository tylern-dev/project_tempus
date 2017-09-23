const path = require('path')
const orm = require(path.join(__dirname, '../data/orm.js'))


module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index')
    })
}