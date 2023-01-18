const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection/config');

class Runs extends Model {}

Runs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        run_name: {
            type: DataTypes.STRING
        },
        run_date: {
            type: DataTypes.DATE
        },
        run_calories: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0
            }
        },
        run_distance: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0
            }
        },
        run_location: {
            type: DataTypes.STRING
        },
        run_notes: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        freezeTableName: true,
        createdAt: true,
        underscored: true,
        model: 'runs'
    }
);

module.exports = Runs;