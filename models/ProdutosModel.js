const { DataTypes, Model } = require('sequelize');
const connection = require('../config/database');

class Produtos extends Model { }

Produtos.init(
    {
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Define o valor padrão como 0 (false)
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
          },
          slug: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
          },
          use_in_menu: {
            type: DataTypes.BOOLEAN,
            defaultValue: false, // Define o valor padrão como 0 (false)
          },
          stock: {
            type: DataTypes.INTEGER,
            defaultValue: 0, // Define o valor padrão como 0
          },
          description: {
            type: DataTypes.STRING,
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false, // Campo obrigatório
          },
          price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false, // Campo obrigatório
          },
    },
    {
        timestamps: true,
        sequelize: connection,
    },
);

module.exports = Produtos;

