const Sequelize = require("sequelize");

const db = require("../db")

module.exports = db.sequelize.define(
    'tag_statuses',
    {
        ts_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        ts_name: {
            type: Sequelize.STRING
        },

        ts_date: {
            type: Sequelize.DATE
        },
        ts_username: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)