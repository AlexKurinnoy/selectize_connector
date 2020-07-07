const Sequelize = require("sequelize");
var mysql      = require('mysql');

var connection = mysql.createConnection({
    host: '192.168.1.109',
    port: '3306',
    user     : 'ron',
    password : '-ron*'
});

const db = {};

const sequelize = new Sequelize('nicmas', 'ron', '-ron*', {
    host: '192.168.1.109',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// const sequelize2 = new Sequelize('census', 'ron', '-ron*', {
//     host: '192.168.30.160',
//     port: '3306',
//     dialect: 'mysql',
//     define: {
//         timestamps: false
//     },
//     operatorsAliases: 0,
//
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.manual = connection;
// db.sequelize2 = sequelize2;

module.exports = db;