const express =require('express');
const ProdutosCatController = require('../controllers/ProdutosCatController');
const ProdutosCatRotas = express.Router();


const produtosCatController = new ProdutosCatController();
// CRUD
ProdutosCatRotas.get('/productsCat',produtosCatController.listar) 
ProdutosCatRotas.post('/productsCat',produtosCatController.criar)
ProdutosCatRotas.get('/productsCat/:id', produtosCatController.consultarPorId);
ProdutosCatRotas.put('/productsCat/:id', produtosCatController.atualizar)
ProdutosCatRotas.delete('/productsCat/:id', produtosCatController.deletar)

module.exports = ProdutosCatRotas;