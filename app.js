var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/add/:num1/:num2", function(req, res) {
	var sum = parseFloat(req.params.num1) + parseFloat(req.params.num2);
	res.render("math", {number: sum})
})

app.get("/subtract/:num1/:num2", function(req, res) {
	var sum = parseFloat(req.params.num1) - parseFloat(req.params.num2);
	res.render("math", {number: sum})
})

app.get("/multiply/:num1/:num2", function(req, res) {
	var sum = parseFloat(req.params.num1) * parseFloat(req.params.num2);
	res.render("math", {number: sum})
})

app.get("/divide/:num1/:num2", function(req, res) {
	var sum = parseFloat(req.params.num1) / parseFloat(req.params.num2);
	res.render("math", {number: sum})
})


app.listen(3000)