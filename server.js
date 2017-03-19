var express = require('express');
var app = express();
var cors = require('cors');
var bodyparser = require('body-parser')
var mongoose = require('mongoose');
var path  = require('path');
var index = require('./routes/index');
var tasks = require('./routes/tasks');

mongoose.connect("mongodb://localhost:27017/mytasklist");
mongoose.connection.on('error',console.error.bind("Connection error:"));
mongoose.connection.once('open',function(){
    console.log("we are connected");
});

app.use('/',index);

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use('/api',tasks);

var port = process.env.PORt || 3000;


/*app.get('/',function(req,res){
    res.send("how are you");
});

app.get('/tasks',function(req,res){
    res.send("here comes the tasks");
});*/

app.listen(port,function(err){
    console.log("server is running at port:"+port);
});