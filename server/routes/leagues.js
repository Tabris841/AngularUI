var express = require('express'),
    router = express.Router(),
    Leagues = require('../models/LeaguesModel');

router.get('/leagues', function(req, res, err) {
    Leagues.findAll().then(function(Leagues) {
        res.json(Leagues);
    });
});

router.get('/leagues/:id', function(req, res, err) {
    Leagues.findById(req.params.id).then(function(Leagues) {
        res.json(Leagues);
    });
});

router.post('/leagues', function(req, res) {
    Leagues.create({
        name: req.body.name,
        homeScreen: req.body.homeScreen,
        ruleScreen: req.body.ruleScreen
    }).then(function() {
        Leagues.findAll().then(function(Leagues) {
            res.json(Leagues);
        });
    });
});

router.put('/leagues', function(req, res) {
    Leagues.update({
        name: req.body.name,
        homeScreen: req.body.homeScreen,
        ruleScreen: req.body.ruleScreen
    }, {
        where: {
            id: req.body.id
        }
    }).then(function() {
        Leagues.findAll().then(function(Leagues) {
            res.json(Leagues);
        });
    });
});

router.delete('/leagues/:id', function(req, res) {
    Leagues.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        Leagues.findAll().then(function(Leagues) {
            res.json(Leagues);
        });
    });
});

module.exports = router;
