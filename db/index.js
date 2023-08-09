const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Uru305014",
    database: "postgres",
  },
});

module.exports = { knex };
