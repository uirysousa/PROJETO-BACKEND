const UsuarioModel = require("../models/UsuarioModel");

class UsuariosController {
    async listar(request, response) {
        let dados = await UsuarioModel.findAll();
        return response.json(dados)
    }

    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await UsuarioModel.findByPk(id, {
            attributes: ['id','firstname', 'surname', 'email']
        });
        return response.json(post);
    }

    async criar(request, response) {
        let body = request.body;
        await UsuarioModel.create(body);
        response.status(201).json({
            message: "Usuario criado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await UsuarioModel.update(body, { where: {id} });
        return response.json({
            message: "Usuario atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await UsuarioModel.destroy({ where: {id} });
        return response.json({
            message: "Usuario deletado com sucesso!"
        })
    }
}


module.exports = UsuariosController;