const CategoriaModel = require("../models/CategoriaModel");

class CategoriasController {
    async listar(request,response){
        let dados = await CategoriaModel.findAll();
        return response.json(dados)
    }

    async criar(request,response){
        let body = request.body;
        await CategoriaModel.create(body);
        response.status(201).json({
            message:"Categoria criada com sucesso"
        });    
    }
}

module.exports = CategoriasController;