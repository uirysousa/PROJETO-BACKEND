const sequelize = require('./config/database');
async function testConnection() { 
    try { await sequelize.authenticate(); 
    console.log('Conexão estabelecida com sucesso.');
     } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
     } } testConnection();