const express =require('express');
const ProdutosOptionController = require('../controllers/ProdutosOptionController');
const ProdutosOptionRotas = express.Router();


const produtosOptionController = new ProdutosOptionController();
// CRUD
ProdutosOptionRotas.get('/productsOption',produtosOptionController.listar) 
ProdutosOptionRotas.post('/productsOption',produtosOptionController.criar)
ProdutosOptionRotas.get('/productsOption/:id', produtosOptionController.consultarPorId);
ProdutosOptionRotas.put('/productsOption/:id', produtosOptionController.atualizar)
ProdutosOptionRotas.delete('/productsOption/:id', produtosOptionController.deletar)

module.exports = ProdutosOptionRotas;