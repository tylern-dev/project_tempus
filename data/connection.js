const Sequelize = require('sequelize');
const sequelizeConnect = new Sequelize('tempus_db','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max: 5,
        min:0,
        idle: 10000
    }
});

module.exports = sequelizeConnect;



