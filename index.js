var express = require("express");
var app = new express();
var redisLib = require("./lib/redis");

app.get("/_info", function(req, res) {
  res.json("OK");
});

app.post("/set/:key/:value", function(req, res) {
    let key1 = req.params.key
    let value1 = req.params.value
    redisLib.Set(key1, value1)
    .then(result => {
      res.json("Success");
    })
    .catch(err => {
      res.json("Failure");
    });
});

app.get("/get/:key", function(req, res) {
    let key1 = req.params.key
    redisLib.Get(key1)
    .then(result => {
      res.json(`Success:${result}`);
    })
    .catch(err => {
      res.json(`Failure:${err}`);
    });
});

app.get("/del/:key", function(req, res) {
    let key = req.params.key
    redisLib.Delete(key)
    .then(result => {
      res.json(`Success:${result}`);
    })
    .catch(err => {
      res.json(`Failure:${err}`);
    });
});

app.post("/setex/:key/:value/:ex", function(req, res) {
    let key = req.params.key
    let value = req.params.value
    let ex = req.params.ex
    redisLib.SetEx(key, value, ex)
    .then(result => {
      res.json("Success");
    })
    .catch(err => {
      res.json("Failure");
    });
});

app.listen("5050");
