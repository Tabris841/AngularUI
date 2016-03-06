var express = require('express'),
    router = express.Router(),
    Games = require('../models/gamesModel');

router.get('/games', function (req, res, err) {
    Games.findAll().then(function (Games) {
        res.json(Games);
    });
});

router.post('/games', function (req, res) {
    Games.create({
        locationId: req.body.locationId,
        team1Id: req.body.team1Id,
        team2Id: req.body.team2Id,
        team1Score: req.body.team1Score,
        team2Score: req.body.team2Score,
        time: req.body.time,
        leagueId: req.body.leagueId
    }).then(function () {
        Games.findAll().then(function (Games) {
            res.json(Games);
        });
    });
});

router.put('/games', function (req, res) {
    Games.update({
        locationId: req.body.locationId,
        team1Id: req.body.team1Id,
        team2Id: req.body.team2Id,
        team1Score: req.body.team1Score,
        team2Score: req.body.team2Score,
        time: req.body.time,
        leagueId: req.body.leagueId
    }, {
        where: {
            id: req.body.id
        }
    }).then(function () {
        Games.findAll().then(function (Games) {
            res.json(Games);
        });
    });
});

router.delete('/games/:id', function (req, res) {
    Games.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        Games.findAll().then(function (Games) {
            res.json(Games);
        });
    });
});

module.exports = router;