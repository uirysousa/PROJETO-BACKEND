const express =require('express');
const ProdutosController = require('../controllers/ProdutosController');
const ProdutosRotas = express.Router();


const produtosController = new ProdutosController();
// CRUD
ProdutosRotas.get('/products',produtosController.listar) 
ProdutosRotas.post('/products',produtosController.criar)
ProdutosRotas.get('/products/:id', produtosController.consultarPorId);
ProdutosRotas.put('/products/:id', produtosController.atualizar)
ProdutosRotas.delete('/products/:id', produtosController.deletar)

module.exports = ProdutosRotas;
