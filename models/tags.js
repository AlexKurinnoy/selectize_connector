const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'tags',
    {
        t_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        t_serial: {
            type: Sequelize.STRING
        },
        t_product: {
            type: Sequelize.STRING
        },
        t_status: {
            type: Sequelize.INTEGER
        },
        t_date: {
            type: Sequelize.DATE
        },
        t_username: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)