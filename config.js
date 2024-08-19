 
// Função para gerar um token JWT
function gerarToken(usuarioId) {
    const payload = { userId: usuarioId };
    const opcoes = { expiresIn: '1h' }; // O token expira em 1 hora
    return jwt.sign(payload, CHAVE_SECRETA, opcoes);
}

/*const crypto = require('crypto');

// Função para gerar um token criptografado de 64 caracteres com ID e senha
function gerarToken(id, senha) {
    // Combine o ID e a senha em uma string
    const dados = `${id}:${senha}`;
    
    // Crie uma chave e IV para a criptografia
    const chave = crypto.randomBytes(32); // 256 bits
    const iv = crypto.randomBytes(16);   // 128 bits
    
    // Crie uma cifra com o algoritmo AES-256-CBC
    const cipher = crypto.createCipheriv('aes-256-cbc', chave, iv);
    let token = cipher.update(dados, 'utf8', 'base64');
    token += cipher.final('base64');
    
    // Truncate para garantir exatamente 64 caracteres
    return token.substring(0, 64);
}
*/ 
