const { Pool } = require("pg");

const port = process.env.DB_PORT;
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

// Set up the connection pool
const pool = new Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
});

// Function to write to Postgres database
async function writeToPostgres(price) {
  const logText = `A volume of Ethereum was requested. The price is ${price}$.`;

  const query = {
    text: "INSERT INTO transactions (log) VALUES ($1)",
    values: [logText],
  };

  try {
    await pool.query(query);
    console.log("Log entry saved to Postgres:", logText);
  } catch (error) {
    console.error("Error writing log entry to Postgres:", error);
  }
}

// Express server setup
var express = require("express");
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", async (req, res) => {
  const quantity = parseFloat(req.query["quantity"]);

  const currentEthereumPrice =
    Math.round(Math.random() * 1000.75 + 2000 * 100) / 100;
  const price = quantity * currentEthereumPrice;

  // Log the transaction in Postgres
  await writeToPostgres(price);

  res.send({ price });
});

app.listen(80, () => {
  console.log("ethereumService started listening at port 80");
});
