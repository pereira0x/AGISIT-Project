const { Pool } = require("pg");

// Set up the connection pool
const pool = new Pool({
  user: "crypto",
  host: "postgres", // Assuming you're running it locally with Docker
  database: "crypto",
  password: "password",
  port: 5432,
});

// Function to write to Postgres database
async function writeToPostgres(price) {
  const logText = `A volume of Solana was requested. The price is ${price}$.`;

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

  const currentSolanaPrice =
    Math.round(Math.random() * 10000.75 + 100 * 100) / 100;
  const price = quantity * currentSolanaPrice;

  // Log the transaction in Postgres
  await writeToPostgres(price);

  res.send({ price });
});

app.listen(80, () => {
  console.log("solanaService listening at port 80");
});
