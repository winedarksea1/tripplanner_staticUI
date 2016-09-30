var Express = require('express');
var router = Express.Router();
var models = require('../models');
var Restaurant = require('../models').Restaurant;
var Place = require('../models').Place;
var Activity = require('../models').Activity;
var Hotel = require('../models').Hotel;


router.get('/', function(req, res, next) {

  var outerScopeContainer = {};

  Hotel.findAll()
   .then(function (dbHotels){
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
   })
   .then(function (dbRestaurants) {
      outerScopeContainer.dbRestaurants = dbRestaurants;
      return Activity.findAll();
    })
    .then(function (dbActivities) {
      res.render('index', {
        templateHotels: outerScopeContainer.dbHotels,
        templateRestaurants: outerScopeContainer.dbRestaurants,
        templateActivities: dbActivities
      });
    })
  .catch(next);

});

module.exports = router;
