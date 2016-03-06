var sqlite = require('sqlite3').verbose(),
    Sequelize = require('sequelize'),
    db = new Sequelize('tables', null, null, {
        host: 'localhost',
        dialect: 'sqlite',
        storage: './database/tables.sqlite3'
    });

//Model for Task Table
var Locations = db.define('locations', {
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
    locationUrl: {
        type: Sequelize.TEXT
    },
    address: {
        type: Sequelize.TEXT
    }
});

//Create the tables
Locations.sync();

module.exports = Locations;
