require('dotenv').config();
const { Sequelize } = require('sequelize');

const config = {
    name: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    host: process.env.DBHOST,
};

const sequelize = new Sequelize(config.name, config.user, config.password, {
    host: config.host,
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: true,
    },
});

require('../models/user')(sequelize, Sequelize);
// sequelize.sync();

module.exports = sequelize;
