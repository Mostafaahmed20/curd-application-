var mongoose = require('mongoose')
let classmodel = require('../MODELS/classmodule')

 function CLASSAPI(app){
app.post('/signupCLASS'  , async (req , res)=>{
    try{
        const {name , age } = req.body
        let student = new classmodel({
            _id:mongoose.Types.ObjectId(),
            name , 
            age
            
        })
        let savedata = await student.save()
        res.send(savedata)
    }
    catch(error){
        console.log(Error)
    }
        })

app.post('/getclassBYID' , async (req , res)=>{
              
    try{
        const {_id } =req.body
        classmodel.findById({_id:_id}).exec((err , data)=>{
            let dataA =  data
            res.send(dataA)
        })
    }
    catch(error){
        console.log(error)
    }

})

app.get('/getallCLASS' , async (req , res)=>{
    try{
    classmodel.find({}).exec((err , data)=>{
        let dataB =  data
        res.send(dataB)
    })
  

    }
    catch(Error){
        console.log(Error)
    }

})

app.post('/deleteBYID' ,async (req , res)=>{
    try{
        const {_id} = req.body
        classmodel.findByIdAndDelete({_id:_id}).exec((err , deleted)=>{
            let dataC =  deleted
            res.send({massage:"deleted sucssess" , dataC})
        })
       
    }
    catch(error){
        console.log(error)
    }
    
})


app.post('/ubdatedata' , async (req , res)=>{
    try{
        const {_id , name , age} = req.body
        classmodel.findByIdAndUpdate({_id:_id} ,  {name , age}).exec((err , ubdated)=>{
            let ubdeted =  data
            res.send({massage:"ubdateded " , ubdeted})
        })
    
    }

catch(error){
    console.log(error)
}

})
    
   


}
module.exports = CLASSAPI