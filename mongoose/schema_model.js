var mongoose=require('mongoose')
var employeeschema=new mongoose.Schema({
    _id:Number,
    name:String,
    age:Number
})
var employeemodel=mongoose.model("employee",employeeschema)
var employee=new employeemodel({
    name:"saran",
    age:10,
    _id:1

})

console.log(employee)