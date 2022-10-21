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
const userr=mongoose.model("user",userschema)
var user1=new userr({
    name:"luffy",
    age:20
})
var user2=new userr({
    name:"hello",
    age:20
})
userr.insertMany([user1,user2]).then(function(){
    console.log("user has been saved!")
}).catch(function(error){
    console.log(error.message)
})
