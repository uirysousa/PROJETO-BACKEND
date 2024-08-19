const express =require('express');
const ProdutosImgController = require('../controllers/ProdutosImgController');
const ProdutosImgRotas = express.Router();


const produtosImgController = new ProdutosImgController();
// CRUD
ProdutosImgRotas.get('/productsImg',produtosImgController.listar) 
ProdutosImgRotas.post('/productsImg',produtosImgController.criar)
ProdutosImgRotas.get('/productsImg/:id', produtosImgController.consultarPorId);
ProdutosImgRotas.put('/productsImg/:id', produtosImgController.atualizar)
ProdutosImgRotas.delete('/productsImg/:id', produtosImgController.deletar)

module.exports = ProdutosImgRotas;