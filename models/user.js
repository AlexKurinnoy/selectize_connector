const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'users',
    {
        u_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        u_login: {
            type: Sequelize.STRING
        },
        u_role: {
            type: Sequelize.INTEGER
        },

        u_name_full: {
            type: Sequelize.STRING
        },
        u_password: {
            type: Sequelize.STRING
        },
        u_blocked: {
            type: Sequelize.BOOLEAN
        },
        u_info: {
            type: Sequelize.STRING
        },
        u_registration: {
            type: Sequelize.DATE
        },
        u_username: {
            type: Sequelize.STRING
        },
        u_temp_password: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)