const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'roles',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        alias: {
            type: Sequelize.STRING
        },
        info: {
            type: Sequelize.STRING
        },
        // date: {
        //     type: Sequelize.DATE
        // },
        username: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)