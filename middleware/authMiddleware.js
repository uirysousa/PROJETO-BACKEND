// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado, token não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, 'seuSegredoJWT');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token inválido.' });
    }
};

module.exports = authMiddleware;
