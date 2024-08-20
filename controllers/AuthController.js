const UsuarioModel = require("../models/UsuarioModel");
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');
const bcrypt = require('bcrypt');

const gerarToken = (user) => {
    const payload = { id: user.id }; // Dados que você quer incluir no token
    const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' }); // Assina o token com o segredo
    return token;
};

class AuthController {
    
    async login(req, res) {
        const { email, password } = req.body;
        const usuario = await UsuarioModel.findOne({ where: { email } });

        if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = jwt.sign(
            { id: usuario.id, email: usuario.email },
            'seuSegredoJWT',
            { expiresIn: '1h' }
        );

        return res.json({ token });
    }
}

module.exports = AuthController;
