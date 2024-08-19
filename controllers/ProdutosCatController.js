const ProdutosCatModel  = require("../models/ProdutosCatModel");

class ProdutosCatController {
    async listar(request, response) {
        let dados = await ProdutosCatModel.findAll();
        return response.json(dados)
    }

    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await ProdutosCatModel.findByPk(id, {
            attributes: ['id','product_id', 'category_id']
        });
        return response.json(post);
    }

    async criar(request, response) {
        let body = request.body;
        await ProdutosCatModel.create(body);
        response.status(201).json({
            message: "Produto_Categoria criado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await ProdutosCatModel.update(body, { where: {id} });
        return response.json({
            message: "Produto_Categoria atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await ProdutosCatModel.destroy({ where: {id} });
        return response.json({
            message: "Produto_Categoria deletado com sucesso!"
        })
    }
}


module.exports = ProdutosCatController;