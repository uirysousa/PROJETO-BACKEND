const UsuarioModel = require("../models/UsuarioModel");

class UsuariosController {
    async listar(request,response){
        let dados = await UsuarioModel.findAll();
        return response.json(dados)
    }

    async criar(request,response){
        let body = request.body;
        await UsuarioModel.create(body);
        response.status(201).json({
            message:"Usuario criado com sucesso"
        });
            
    }
}

module.exports = UsuariosController;