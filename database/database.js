const Squelize = require("sequelize");
const { Sequelize } = require("sequelize");

const connection = new Sequelize('Guiapress', 'kauan', 'Vidaloka13k', {
    host:' mysql669.umbler.com',
    dialect:'mysql',
    timezone: "-03:00"
});

module.exports = connection;