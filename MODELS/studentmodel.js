var mongoose = require('mongoose')

let user_schema =  new mongoose.model('student' , {
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    age:Number,
    classes:{type: mongoose.Schema.Types.ObjectId , ref:'classes'}      
})


module.exports = user_schema 