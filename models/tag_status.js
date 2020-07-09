const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'tag_statuses',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
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