const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'tags',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        serial: {
            type: Sequelize.STRING
        },
        product: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.INTEGER
        },
        date: {
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