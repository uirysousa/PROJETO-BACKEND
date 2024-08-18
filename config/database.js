const { Sequelize } = require('sequelize'); 
// Configuração da conexão com o banco de dados 

const connection = new Sequelize({
    dialect: 'mysql',
    database:'projeto',
    host: 'localhost',
    username:'root',
    password:'root',
    port: 3306
    });

module.exports = connection;

