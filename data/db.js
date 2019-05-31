//IMPORTS
const knex = require('knex');
const config = require('../knexfile.js');

//SETUP
const dbEnv = process.env.DB_ENV || 'development';

//EXPORTS
module.exports = knex(config[dbEnv]);