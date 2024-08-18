const ProdutosModel = require("../models/ProdutosModel");

class ProdutosController {
    async listar(request,response){
        let dados = await ProdutosModel.findAll();
        return response.json(dados)
    }

    async criar(request,response){
        let body = request.body;
        await ProdutosModel.create(body);
        response.status(201).json({
            message:"Produto criado com sucesso"
        });
            
    }
}

module.exports = ProdutosController;