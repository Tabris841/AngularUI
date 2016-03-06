var sqlite = require('sqlite3').verbose(),
    Sequelize = require('sequelize'),
    Leagues = require('./leaguesModel'),
    db = new Sequelize('tables', null, null, {
        host: 'localhost',
        dialect: 'sqlite',
        storage: './database/tables.sqlite3'
    });

//Model for Task Table
var Teams = db.define('teams', {
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
    coach: {
        type: Sequelize.TEXT
    },
    divisionName: {
        type: Sequelize.TEXT
    },
    leagueId: {
        type: Sequelize.INTEGER,
        references: {
            model: Leagues,
            key: 'id'
        }
    }
});

Teams.belongsTo(Leagues);

//Create the tables
Teams.sync();

module.exports = Teams;
