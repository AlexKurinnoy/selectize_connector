const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        login: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.INTEGER,
            defaultValue: 2
        },

        name_full: {
            type: Sequelize.STRING,
            defaultValue: 'John'
        },
        password: {
            type: Sequelize.STRING
        },
        blocked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        client_id: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        info: {
            type: Sequelize.STRING,
            defaultValue: 'blabla'
        },
        // registration: {
        //     type: Sequelize.DATE
        // },
        username: {
            type: Sequelize.STRING
        },
        temp_password: {
            type: Sequelize.STRING,
            defaultValue: '123'
        }
    },
    {
        timestamps: false
    }
)