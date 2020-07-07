const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        login: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER
        },

        name_full: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        blocked: {
            type: Sequelize.BOOLEAN
        },
        info: {
            type: Sequelize.STRING
        },
        // registration: {
        //     type: Sequelize.DATE
        // },
        username: {
            type: Sequelize.STRING
        },
        temp_password: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)