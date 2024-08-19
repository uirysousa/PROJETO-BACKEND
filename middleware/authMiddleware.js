const jwt = require('jsonwebtoken');
const UsuarioModel = require('../models/UsuarioModel');

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
        
        const decoded = jwt.verify(token, 'seu-segredo');
        const user = await UsuarioModel.findByPk(decoded.id);
        
        if (!user) {
            return res.status(401).send({ error: 'Usuário não encontrado.' });
        }
        
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Falha na autenticação.' });
    }
};

module.exports = authMiddleware;
