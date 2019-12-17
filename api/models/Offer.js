const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'offers';

const Offer = sequelize.define('Offer', {
  title: {
    type: Sequelize.STRING,
    unique: true,
  },
  content: {
    type: Sequelize.STRING,
  },
}, { tableName });

// eslint-disable-next-line
Offer.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Offer;
