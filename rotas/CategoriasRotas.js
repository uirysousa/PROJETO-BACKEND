const express =require('express');
const CategoriasController = require('../controllers/CategoriasController');
const CategoriasRotas = express.Router();


const categoriasController = new CategoriasController();
// CRUD
CategoriasRotas.get('/category',categoriasController.listar) 
CategoriasRotas.post('/category',categoriasController.criar)
CategoriasRotas.get('/category/:id', categoriasController.consultarPorId);
CategoriasRotas.put('/category/:id', categoriasController.atualizar)
CategoriasRotas.delete('/category/:id', categoriasController.deletar)


module.exports = CategoriasRotas;