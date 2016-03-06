var sqlite = require('sqlite3').verbose(),
    Sequelize = require('sequelize'),
    db = new Sequelize('tables', null, null, {
        host: 'localhost',
        dialect: 'sqlite',
        storage: './database/tables.sqlite3'
    });

//Model for Task Table
var Leagues = db.define('leagues', {
    id: {
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    },
    homeScreen: {
        type: Sequelize.TEXT
    },
    ruleScreeen: {
        type: Sequelize.TEXT
    }
});

//Create the tables
Leagues.sync();

module.exports = Leagues;