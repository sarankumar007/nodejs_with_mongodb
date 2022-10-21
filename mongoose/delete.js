const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/lol")
const userschema=new mongoose.Schema({
    name:String,
    age:Number
})
const userr=mongoose.model("user",userschema)
userr.deleteOne({name:"luffy"},(err)=>{
    if(err)
    console.log(err)
    else
    console.log("deleted")
})
