var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/add/:num1/:num2", function(req, res) {
	var sum = parseFloat(req.params.num1) + parseFloat(req.params.num2);
	res.render("math", {number: sum})
})

app.get("/subtract/:num1/:num2", function(req, res) {
	var difference = parseFloat(req.params.num1) - parseFloat(req.params.num2);
	res.render("math", {number: difference})
})

app.get("/multiply/:num1/:num2", function(req, res) {
	var product = parseFloat(req.params.num1) * parseFloat(req.params.num2);
	res.render("math", {number: product})
})

app.get("/divide/:num1/:num2", function(req, res) {
	var quotient = parseFloat(req.params.num1) / parseFloat(req.params.num2);
	res.render("math", {number: quotient})
})

app.get("/math/:operator/:num1/:num2", function(req, res) {
	if(req.params.operator === "add") {
		var sum = parseFloat(req.params.num1) + parseFloat(req.params.num2);
		res.render("math", {number: sum})
	} else if (req.params.operator === "subract") {
		var difference = parseFloat(req.params.num1) - parseFloat(req.params.num2);
		res.render("math", {number: difference});
	} else if (req.params.operator === "multiply") {
		var product = parseFloat(req.params.num1) * parseFloat(req.params.num2);
		res.render("math", {number: product})
	} else if (req.params.operator === "divide") {
		var quotient = parseFloat(req.params.num1) / parseFloat(req.params.num2);
		res.render("math", {number: quotient})
	}
})


app.listen(3000)