var express = require('express');
var router = express.Router();
var db = require('../model/models');

router.get('/tasks',function(req,res,next){
    db.find({},function(err,doc){
        if(err) throw(err.stack);
        res.send(doc);
    });
});

router.get('/tasks/:id',function(req,res,next){
    var id = req.params.id;
    db.findById(id,function(err,doc){
        if(err) throw(err.stack);
        res.send(doc);
    });
});

router.post('/tasks',function(req,res,next){
    var task = new db(req.body);
    task.save(task,function(err,doc){
        if(err) throw(err.stack);
        res.send(doc);
    });
});

router.delete('/tasks/:id',function(req,res,next){
    var id = req.params.id;
    db.findByIdAndRemove(id,function(err,doc){
        if(err) throw (err.stack);
        res.send(doc);
    });
});

router.put('/tasks/:id',function(req,res,next){
    var id = req.params.id;
    db.findByIdAndUpdate(id,{title:req.body.title,isDone:req.body.isDone},function(err,doc){
        if(err) throw(err.stack);
        res.send(doc);
    });
});


module.exports = router;