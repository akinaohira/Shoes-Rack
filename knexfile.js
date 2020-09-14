// looking for where is prosess.env to go
require("dotenv").config();

module.exports = {
  //client is what database use
  development: {
    client: "postgresql",
    connection: {
      connectionString: `postgres://${process.env.USER}@127.0.0.1:5432/shoesRack`,
    },
    database: "shoesRack",
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
  production: {
    client: "postgresql",
    migrations: {
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
  },
};
