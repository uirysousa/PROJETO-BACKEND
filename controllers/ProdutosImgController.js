const ProdutosImg = require("../models/ProdutosImg");

class ProdutosImgController {
    async listar(request, response) {
        let dados = await ProdutosImg.findAll();
        return response.json(dados)
    }

    async consultarPorId(request, response) {
        let id = request.params.id;
        let post = await ProdutosImg.findByPk(id, {
            attributes: ['id','enabled', 'path']
        });
        return response.json(post);
    }

    async criar(request, response) {
        let body = request.body;
        await ProdutosImg.create(body);
        response.status(201).json({
            message: "Imagens do Produto criado com sucesso"
        });
    }

    async atualizar(request, response) {
        const id = request.params.id;
        const body = request.body;
        await ProdutosImg.update(body, { where: {id} });
        return response.json({
            message: "Imagens do Produto atualizado com sucesso!"
        })        
    }

    async deletar(request, response) {
        const id = request.params.id;
        await ProdutosImg.destroy({ where: {id} });
        return response.json({
            message: "Imagens do Produto deletado com sucesso!"
        })
    }
}


module.exports = ProdutosImgController;