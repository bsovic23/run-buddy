const { Model, dataTypes, DataTypes } = require('sequelize');
const sequelize = require('../connection/config');

class User extends Model {}

User.init(
    {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        telephone: {
            type: dataTypes.STRING,
            allowNull: false
        },
        trainerYesNo: {
            type: dataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamp: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;