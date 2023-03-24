//inside this file we'll create mongodb schema
//mongoose.Schema allows you to define a shape and content of a document

const mongoose=require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        uniqure:true
    },
    gender:String,
    status:String
})

const Studentdb = mongoose.model('studentdb',schema);

module.exports=Studentdb;