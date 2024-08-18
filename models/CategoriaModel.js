const { DataTypes, Model } = require('sequelize');
const connection = require('../config/database');
const bcrypt = require('bcrypt');

class Categorias extends Model { }

Categorias.init(
    {
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

    },
    {
        timestamps: true,
        sequelize: connection,
    },
);

module.exports = Categorias;

