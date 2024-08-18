const { DataTypes, Model } = require('sequelize');
const connection = require('../config/database');
const bcrypt = require('bcrypt');

class Usuarios extends Model { }

Usuarios.init(
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
            unique: true, // Garante que o email seja único
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false, // Campo obrigatório
            set(value) {
                // Antes de salvar a senha, hasheie usando o bcrypt
                const saltRounds = 10; // Número de rounds para o hash
                const hash = bcrypt.hashSync(value, saltRounds);
                this.setDataValue('password', hash);
            }
        },
    },
    {
        timestamps: true,
        sequelize: connection,
    },
);

module.exports = Usuarios;