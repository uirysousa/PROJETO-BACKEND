const { DataTypes, Model } = require('sequelize');
const connection = require('../config/database');

class ImgProdutos extends Model { }

ImgProdutos.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Campo obrigatório
            references: {
              model: "Produtos", // Referencia a tabela de produtos
              key: "id", // Referencia a chave primária da tabela de produtos
            },
          },
          enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Define o valor padrão como 0 (false)
          },
          path: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
          },
    },
    {
        timestamps: false,
        sequelize: connection,
    },
);

module.exports = ImgProdutos;

