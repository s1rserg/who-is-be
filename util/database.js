const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('whois', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: 'mysql',
  port: 24582
});

module.exports = sequelize;