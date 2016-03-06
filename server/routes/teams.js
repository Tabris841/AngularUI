var express = require('express'),
    router = express.Router(),
    Teams = require('../models/teamsModel');

router.get('/teams', function(req, res, err) {
    Teams.findAll().then(function(Teams) {
        res.json(Teams);
    });
});

router.post('/teams', function(req, res) {
    Teams.create({
        name: req.body.name,
        coach: req.body.coach,
        divisionName: req.body.divisionName,
        leagueId: req.body.leagueId
    }).then(function() {
        Teams.findAll().then(function(Teams) {
            res.json(Teams);
        });
    });
});

router.put('/teams', function(req, res) {
    Teams.update({
        name: req.body.name,
        coach: req.body.coach,
        divisionName: req.body.divisionName,
        leagueId: req.body.leagueId
    }, {
        where: {
            id: req.body.id
        }
    }).then(function() {
        Teams.findAll().then(function(Teams) {
            res.json(Teams);
        });
    });
});

router.delete('/teams/:id', function(req, res) {
    Teams.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        Teams.findAll().then(function(Teams) {
            res.json(Teams);
        });
    });
});

module.exports = router;
