const Squelize = require("sequelize");
const { Sequelize } = require("sequelize");

const connection = new Sequelize('Guiapress', 'kauan', '705324', {
    host:'localhost',
    dialect:'mysql',
    timezone: "-03:00"
});

module.exports = connection;