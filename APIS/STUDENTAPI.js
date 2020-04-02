let student_model = require('../MODELS/studentmodel')
let class_model = require('../MODELS/classmodule')
let mongoose = require('mongoose')

function STUDENTAPI(app){
    app.post('/signupstudent' , async (req , res)=>{
        try{

            const {name  , age , class_id} = req.body
            let student1 = new student_model({
                _id:mongoose.Types.ObjectId(),
                name,
                age,
                class:class_id
            })
    
            await student1.save()        ////////////////save data for student 
            let currentclass = await class_model.findOne({_id:class_id})
             currentclass.student.push( student1._id)
           await currentclass.save()
           res.send({massage:"sucsses", currentclass})

        }
        catch(error){
            console.log(error)
        }
})

}

module.exports = STUDENTAPI