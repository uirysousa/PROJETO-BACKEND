 
// Função para gerar um token JWT
function gerarToken(usuarioId) {
    const payload = { userId: usuarioId };
    const opcoes = { expiresIn: '1h' }; // O token expira em 1 hora
    return jwt.sign(payload, CHAVE_SECRETA, opcoes);
}

