var mongoose = require('mongoose')

function connectDB(){
    mongoose.connect('mongodb://localhost:27017/myapp' , {useNewUrlParser:true})
    .then(()=>console.log('connected sucssefuly'))
    .catch(()=>console.log(Error))
}

module.exports = connectDB