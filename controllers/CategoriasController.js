const { response } = require("express");
const CategoriaModel = require("../models/CategoriaModel");


class CategoriasController {
    listar(request, response){   
        const dados =  CategoriaModel.listar();
        return  response.json (dados);
    }

    consultarPorID(request, response){
        return CategoriaModel.consultarPorID()
    }
    
    criar(request, response){
        const body = request.body;
        CategoriaModel.criar(body);
         return response.status(200).json({
            message:'Categoria cadastrado com sucesso'
         })

    }

    atualizar(request, response){
        return CategoriaModel.atualizar()
    }

    deletar(request, response){
        return CategoriaModel.deletar()
    }
}

module.exports = CategoriasController;