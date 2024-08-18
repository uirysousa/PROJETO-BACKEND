const { DataTypes, Model, ENUM } = require('sequelize');
const connection = require('../config/database');

class Produtos_Option extends Model { }

Produtos_Option.init(
    {
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false, // Campo obrigatório
            references: {
              model: "Produtos", // Referencia a tabela de produtos
              key: "id", // Referencia a chave primária da tabela de produtos
            },
          },
          title: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
          },
          shape: {
            type: ENUM("square", "circle"), // Define o tipo como ENUM com valores "square" e "circle"
            defaultValue: "square", // Define o valor padrão como "square"
          },
          radius: {
            type: DataTypes.INTEGER,
            defaultValue: 0, // Define o valor padrão como 0
          },
          type: {
            type: ENUM("text", "color"), // Define o tipo como ENUM com valores "text" e "color"
            defaultValue: "text", // Define o valor padrão como "text"
          },
          values: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
          },
    },
    {
        timestamps: false,
        sequelize: connection,
    },
);

module.exports = Produtos_Option;
