const ProdutosOption = require("../models/ProdutosOption");

class ProdutosOptionController {
    async listar(request, response) {
        let dados = await ProdutosOption.findAll();
        return response.json(dados)
    }

    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await ProdutosOption.findByPk(id, {
            attributes: ['id','title', 'shaper', 'types']
        });
        return response.json(post);
    }

    async criar(request, response) {
        let body = request.body;
        await ProdutosOption.create(body);
        response.status(201).json({
            message: "Opcoes do produto criado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await ProdutosOption.update(body, { where: {id} });
        return response.json({
            message: "Opcoes do produto atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await ProdutosOption.destroy({ where: {id} });
        return response.json({
            message: "Opcoes do produto deletado com sucesso!"
        })
    }
}


module.exports = ProdutosOptionController;