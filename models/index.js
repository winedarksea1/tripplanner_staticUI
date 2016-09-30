var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {
  logging: false
});


var Place = db.define('place', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
});

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  amenities: {
    type: Sequelize.STRING,
    allowNull: false
  } // string of comma delimited items
});

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range: {
    type: Sequelize.STRING,
    allowNull: false // date-type string??
  }
});

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  }, // comma delimited string list??
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
  db: db,
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
}
