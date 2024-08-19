const UsuarioModel = require("../models/UsuarioModel");
const jwt = require('jsonwebtoken');

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
