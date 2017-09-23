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


<<<<<<< HEAD
=======
// connection.connect(function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log(`connection ID ${connection.threadId}` )
// })
>>>>>>> 677b548dea527f89c78b7fa5eddc3ac8b683170b
