const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/lol")
const userschema=new mongoose.Schema({
    name:String,
    age:Number
})
const userr=mongoose.model("user",userschema)
userr.find((err,data)=>{
    if(err)
    console.log(err)
    else
    console.log(data)
})
