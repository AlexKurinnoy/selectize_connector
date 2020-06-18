const Sequelize = require("sequelize");

const db = require("../db");

module.exports = db.sequelize2.define(
    'mapping',
    {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        address_hash: {
            type: Sequelize.STRING
        },
        resp_file: {
            type: Sequelize.STRING
        },
        resp_data: {
            type: Sequelize.TEXT
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
)