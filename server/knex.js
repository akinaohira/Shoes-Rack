const knex = require("knex");
const config = require("../knexfile");

// making connextion to data base
const db = knex(
  process.env.NODE_ENV === "production" ? config.production : config.development
);
module.exports = db;
// process.env.NODE_ENV is setting that HEROKU need to acccess to server for config
// if NODE_ENV is  production, please use production config, ohterwize use config.development
