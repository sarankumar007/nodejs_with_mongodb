const express=require('express') //visit expressjs.com for more info
const app=express()
app.get('/',(req,res)=>{
    res.send("<p style='color:red;'>hello all i am saran</p>")

})
app.get('/saran',(req,res)=>{
    res.send("<p style='color:blue;'>hello all i am not  saran</p>")

})//put localhost:3000/saran
app.listen(3000,()=>console.log("server started"))