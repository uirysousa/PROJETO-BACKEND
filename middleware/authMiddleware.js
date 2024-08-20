const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config'); // Importa o segredo da configuração

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).send({ error: 'Nenhum token fornecido.' });
        }
        
        const token = authHeader.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).send({ error: 'Token inválido.' });
        }
        console.log(request.headers.token);
        
        const decoded = jwt.verify(token, jwtSecret); // Verifica o token usando o segredo
        req.user = decoded; // Adiciona os dados decodificados ao objeto `req`
        next();
    } catch (error) {
        res.status(401).send({ error: 'Falha na autenticação.' });
    }
    console.log(token);
};

module.exports = authMiddleware;
