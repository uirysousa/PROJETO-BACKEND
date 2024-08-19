const ProdutosModel = require("../models/ProdutosModel");

class ProdutosController {
    async listar(request, response) {
        let dados = await ProdutosModel.findAll();
        return response.json(dados)
    }

    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await ProdutosModel.findByPk(id, {
            attributes: ['id','enabled', 'name', 'slug','stock','description','price','price_with_discount','category_ids']
        });
        return response.json(post);
    }

    async criar(request, response) {
        let body = request.body;
        await ProdutosModel.create(body);
        response.status(201).json({
            message: "Produto criado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await ProdutosModel.update(body, { where: {id} });
        return response.json({
            message: "Produto atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await ProdutosModel.destroy({ where: {id} });
        return response.json({
            message: "Produto deletado com sucesso!"
        })
    }
}


module.exports = ProdutosController;