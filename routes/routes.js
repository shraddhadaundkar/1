"use strict";
module.exports = function (app) {
    var newController = require('../controller/newcontroller.js');
    var new1 = new newController;
	
	
	 app.get('/ascending', new1.findAllStudent);
	 app.get('/descending', new1.findAllScore);
	
};