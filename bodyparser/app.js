const express=require('express')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extends:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.post('/',function(req,res){
    var fn=req.body.fname
    var ln=req.body.lname
    res.send("hello "+fn+" "+ln)
})
app.listen(3000,()=>console.log("server started"))