const { DataTypes, Model } = require('sequelize');
const connection = require('../config/database');

class Produtos_Categorias extends Model { }

Produtos_Categorias.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Campo obrigatório
            references: {
                model: "Produtos", // Referencia a tabela de produtos
                key: "id", // Referencia a chave primária da tabela de produtos
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Campo obrigatório
            references: {
                model: "Categorias", // Referencia a tabela de categorias
                key: "id", // Referencia a chave primária da tabela de categorias
            },
        },
    },
    {
        timestamps: false,
        sequelize: connection,
    },
);

module.exports = Produtos_Categorias;


