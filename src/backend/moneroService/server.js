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
  const quantity = parseFloat(req.query["quantity"]);

  const currentMoneroPrice =
    Math.round(Math.random() * 10000.75 + 80 * 100) / 100;
  const price = quantity * currentMoneroPrice;
  writeToDatastoreTemporary(
    `A ${req.query["quantity"]}x volume of Monero was requested. The price is ${price}$.`
  );
  res.send({ price });
});

app.listen(8080, () => {
  writeToDatastoreTemporary("moneroService listening at port 8080");
});
