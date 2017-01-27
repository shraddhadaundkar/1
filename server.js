"use strict";

const express = require("express");
const http = require('http');
const compression = require('compression');
const app = express();
app.use( compression());
var routes = require('./routes/routes') (app);
console.log(routes);
var server = app.listen(8091);