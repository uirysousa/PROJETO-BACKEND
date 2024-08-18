const express =require('express');
const ProdutosController = require('../controllers/ProdutosController');
const ProdutosRotas = express.Router();


const produtosController = new ProdutosController();
// CRUD
ProdutosRotas.get('/products',produtosController.listar) 
ProdutosRotas.post('/products',produtosController.criar)

module.exports = ProdutosRotas;
