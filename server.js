const express = require('express');
const UsuariosRotas = require('./rotas/UsuariosRotas');
const CategoriasRotas = require('./rotas/CategoriasRotas');
const ProdutosRotas = require('./rotas/ProdutosRotas');
const AuthRotas = require('./rotas/AuthRotas');
const authMiddleware = require('./middleware/authMiddleware');

const host = 'localhost';
const port = 3000;

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    return response.send('Olá, Este é o Projeto de Backend do Geração Tech');
});

app.use(AuthRotas);

// Rotas protegidas pelo middleware de autenticação
app.use(authMiddleware);
app.use(UsuariosRotas);
app.use(CategoriasRotas);
app.use(ProdutosRotas);

app.listen(port, host, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});
