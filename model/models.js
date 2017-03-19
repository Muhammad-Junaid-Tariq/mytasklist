var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskschema = new Schema({
    title:{
        type:String
    },
    isDone:{
        type:Boolean
    }
});

module.exports = mongoose.model('tasks',taskschema);