const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web28');

var CatModel = mongoose.model('Cat', {
     name: String,
     age: Number
});

function getList(callback){
    UserModel.find({}).exec(function(err,data){
        callback(err,data);
    })
}