const { response } = require("express");
const ProdutosModel = require("../models/ProdutosModel");

class ProdutosController {
    listar(request, response){   
        const dados =  ProdutosModel.listar();
        return  response.json (dados);
    }

    consultarPorID(request, response){
        return ProdutosModel.consultarPorID()
    }
    
    criar(request, response){
        const body = request.body;
        ProdutosModel.criar(body);
         return response.status(200).json({
            message:'Produto cadastrado com sucesso'
         })

    }

    atualizar(request, response){
        return ProdutosModel.atualizar()
    }

    deletar(request, response){
        return ProdutosModel.deletar()
    }
}

module.exports = ProdutosController;