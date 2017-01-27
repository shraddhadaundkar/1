"use strict";

var fs = require("fs");
var Table = require('easy-table');




module.exports = (function () {

	function New(req,res) {

	}
	New.prototype.findAllStudent =
	function (req, res) {
		fs.readFile('source.json','utf-8', function(err, data) {
			console.log(data);
			var ans=JSON.parse(data);
		var t = new Table
		ans.forEach(function(product) {
		t.cell('id', product.id)
		t.cell('fname', product.fName)
		t.cell('lname', product.lName)
		t.cell('score', product.score)
		t.newRow()
		})
		res.send(t.toString());
	})
	
	};
	New.prototype.findAllScore =
	function (req, res) {
		fs.readFile('source.json','utf-8', function(err, data) {
			console.log(data);
			var ans=JSON.parse(data);
		var t = new Table
		ans.forEach(function(product) {
		t.cell('id', product.id)
		t.cell('fname', product.fName)
		t.cell('lname', product.lName)
		t.cell('score', product.score)
		t.newRow()
		})
		t.sort(['score|des'])
		res.send(t.toString());
	})
	
	};
	return New;
})();