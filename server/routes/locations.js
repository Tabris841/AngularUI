var express = require('express'),
    router = express.Router(),
    Locations = require('../models/LocationsModel');

router.get('/locations', function(req, res, err) {
    Locations.findAll().then(function(Locations) {
        res.json(Locations);
    });
});

router.get('/locations/:id', function(req, res, err) {
    Locations.findById(req.params.id).then(function(Locations) {
        res.json(Locations);
    });
});

router.post('/locations', function(req, res) {
    Locations.create({
        name: req.body.name,
        locationUrl: req.body.locationUrl,
        address: req.body.address
    }).then(function() {
        Locations.findAll().then(function(Locations) {
            res.json(Locations);
        });
    });
});

router.put('/locations', function(req, res) {
    Locations.update({
        name: req.body.name,
        locationUrl: req.body.locationUrl,
        address: req.body.address
    }, {
        where: {
            id: req.body.id
        }
    }).then(function() {
        Locations.findAll().then(function(Locations) {
            res.json(Locations);
        });
    });
});

router.delete('/locations/:id', function(req, res) {
    Locations.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        Locations.findAll().then(function(Locations) {
            res.json(Locations);
        });
    });
});

module.exports = router;