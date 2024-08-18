const express =require('express');
const CategoriasController = require('../controllers/CategoriasController');
const CategoriasRotas = express.Router();


const categoriasController = new CategoriasController();
// CRUD
CategoriasRotas.get('/category',categoriasController.listar) 
CategoriasRotas.post('/category',categoriasController.criar)
CategoriasRotas.put('/category',categoriasController.atualizar)
CategoriasRotas.delete('/category',categoriasController.deletar)

module.exports = CategoriasRotas;