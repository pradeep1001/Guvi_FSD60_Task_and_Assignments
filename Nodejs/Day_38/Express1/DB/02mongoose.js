const mongoose=require('mongoose')
// connect mongodb with nodejs
// mongoose.connect()
mongoose.connect('mongodb://127.0.0.1:27017/fsd60wd_01_mongoose')
// mongodb >> doesnt create empty database
// create db >> u need to have collection

//create an collection
// users >> name and age
// name > datatype
// age > datatype
// schema ===> mockapi + yup

//const collectionName=mongoose.model("collectionName",{schema})
// user Model
const Task=mongoose.model("Task",{
    desc:{type:String},
    taskName:{type:String},
    priorty:{type:String},
    completed:{type:Boolean}
})
// insert the data in db in User Collection/Model
// new keyword
const taskData=new Task({
    desc:"Day03 Task",
    taskName:"DOM Manipulation",
    priorty:"High",
    completed:false
})

//save to DB
// save()
//userData.save()
//.then()

//async await
const connection = async () => {
    try {
        const res = await taskData.save()
        console.log(res, "We are connected to MongoDB....")
    } catch (error) {
        console.error("Error saving task:", error)
    }
}

connection()