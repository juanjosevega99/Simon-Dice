const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNUll: false,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNUll: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNUll: false
  },
  password: {
    type: Sequelize.STRING,
    allowNUll: false
  }
});

module.exports = User;
