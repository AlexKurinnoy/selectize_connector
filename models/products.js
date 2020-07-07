const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'products',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.STRING
        },
        client: {
            type: Sequelize.INTEGER
        },
        number_invoice: {
            type: Sequelize.STRING
        },
        date_invoice: {
            type: Sequelize.STRING
        },
        cost_invoice: {
            type: Sequelize.STRING
        },
        createdAT: {
            type: Sequelize.DATE
        },
        username: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)