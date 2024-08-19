const express =require('express');
const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRotas = express.Router();


const usuariosController = new UsuariosController();
// CRUD
UsuariosRotas.get('/users',usuariosController.listar) 
UsuariosRotas.post('/users',usuariosController.criar)
UsuariosRotas.get('/users/:id', usuariosController.consultarPorId);
UsuariosRotas.put('/users/:id', usuariosController.atualizar)
UsuariosRotas.delete('/users/:id', usuariosController.deletar)

module.exports = UsuariosRotas;