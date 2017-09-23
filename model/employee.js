var Sequelize = require('sequelize');
var sequelizeConnect = require('../data/connection.js')

const Employee = sequelizeConnect.define('employee', {
    empId: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name:Sequelize.STRING,
    last_name: Sequelize.STRING,
    pay_rate: Sequelize.DECIMAL
},
{
    timestamps:false
});
Employee.sync();
module.exports = Employee;