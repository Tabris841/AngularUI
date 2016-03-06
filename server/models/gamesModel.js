var sqlite = require('sqlite3').verbose(),
    Sequelize = require('sequelize'),
    Leagues = require('./leaguesModel'),
    Teams = require('./teamsModel'),
    Locations = require('./locationsModel'),
    db = new Sequelize('tables', null, null, {
        host: 'localhost',
        dialect: 'sqlite',
        storage: './database/tables.sqlite3'
    });

//Model for Task Table
var Games = db.define('games', {
    id: {
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    locationId: {
        type: Sequelize.INTEGER,
        references: {
            model: Locations,
            key: 'id'
        }
    },
    team1Id: {
        type: Sequelize.INTEGER,
        references: {
            model: Teams,
            key: 'id'
        }
    },
    team2Id: {
        type: Sequelize.INTEGER,
        references: {
            model: Teams,
            key: 'id'
        }
    },
    team1Score: {
        type: Sequelize.INTEGER
    },
    team2Score: {
        type: Sequelize.INTEGER
    },
    time: {
        type: Sequelize.DATE
    },
    leagueId: {
        type: Sequelize.INTEGER,
        references: {
            model: Leagues,
            key: 'id'
        }
    }
});

Games.belongsTo(Locations);
Games.belongsTo(Leagues);
Games.belongsTo(Teams);

//Create the tables
Games.sync();

module.exports = Games;
