const mongoose =require('mongoose')
mongoose.connect("mongodb://localhost:27017/lol")
const userschema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,validate(value){
        if(value<0){
            throw new Error("enter positive number!")
        }
    }}
})
const user=mongoose.model("user",userschema)
var user1=new user({
    name:"hi",
    age:20
})
user1.save().then(function(){
    console.log("user has been saved!")
}).catch(function(error){
    console.log(error.message)
})
