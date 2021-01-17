const express = require("express");
const router = express.Router();

const boxes = [];

router.post("/addBox", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.name);
  res.send("done");
  boxes.push(req.body.name);
});

router.get("/cfbs", (req, res, next) => {
  res.send("Crossfit BS");
});

router.get("/all", (req, res, next) => {
  res.send(boxes.join(", "));
});

router.get("/:id", (req, res, next) => {
  // const id = req.query.id;
  // console.log(req);
  console.log(id, since, fields, anotherField);
  console.log(req.params.id);
  res.send("Crossfit BS" + req.params.id);
});

exports.routes = router;
