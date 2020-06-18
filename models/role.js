const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'roles',
    {
        r_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        r_name: {
            type: Sequelize.STRING
        },
        r_alias: {
            type: Sequelize.STRING
        },
        r_info: {
            type: Sequelize.STRING
        },
        r_date: {
            type: Sequelize.DATE
        },
        r_username: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)