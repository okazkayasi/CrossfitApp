const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 8081;

const boxRoute = require("./routes/box");
app.use(bodyParser.json());

app.use("/box", boxRoute.routes);

const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
