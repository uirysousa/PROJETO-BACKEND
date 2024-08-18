const express =require('express');
const UsuariosController = require('../controllers/UsuariosController');
const UsuariosRotas = express.Router();


const usuariosController = new UsuariosController();
// CRUD
UsuariosRotas.get('/users',usuariosController.listar) 
UsuariosRotas.post('/users',usuariosController.criar)
UsuariosRotas.put('/users',usuariosController.atualizar)
UsuariosRotas.delete('/users',usuariosController.deletar)

module.exports = UsuariosRotas;