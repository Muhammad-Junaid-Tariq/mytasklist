var mongoose = require('mongoose');
var express = require('express');
var app = express();
mongoose.connect("mongodb://localhost:27017/mytasklist");

mongoose.connection.on('error',console.error.bind('connection error:'));
mongoose.connection.once('open',function(){
    console.log("we are connected");
});

console.log("connected");
app.listen(3000);