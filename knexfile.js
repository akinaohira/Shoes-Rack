// looking for where is prosess.env to go
require("dotenv").config();

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
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
