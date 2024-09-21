/* const { Datastore } = require("@google-cloud/datastore");

const datastore = new Datastore();

function writeToDatastore(logMessage) {
  const logEntity = {
    key: datastore.key(["LogEntry"]),
    data: {
      timestamp: new Date(),
      message: logMessage,
    },
  };

  datastore
    .save(logEntity)
    .then(() => {
      console.log("Log entry saved to Datastore:", logMessage);
    })
    .catch((error) => {
      console.error("Error writing log entry to Datastore:", error);
    });
} */

function writeToDatastoreTemporary(logMessage) {
  console.log("Log entry saved to Datastore:", logMessage);
}

var express = require("express");
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  const quantity = parseInt(req.query["quantity"]);

  const currentEthereumPrice =
    Math.round(Math.random() * 1000.75 + 2000 * 100) / 100;
  const price = quantity * currentEthereumPrice;
  writeToDatastoreTemporary(
    `A ${req.query["quantity"]}x volume of Ethereum was requested. The price is ${price}$.`
  );
  res.send({ price });
});

app.listen(8080, () => {
  writeToDatastoreTemporary("ethereumService listening at port 8080");
});
