const express =require('express');
const ProdutosController = require('../controllers/ProdutosController');
const ProdutosRotas = express.Router();


const produtosController = new ProdutosController();
// CRUD
ProdutosRotas.get('/products',produtosController.listar) 
ProdutosRotas.post('/products',produtosController.criar)
ProdutosRotas.put('/products',produtosController.atualizar)
ProdutosRotas.delete('/products',produtosController.deletar)

module.exports = ProdutosRotas;
