const express=require('express') //visit expressjs.com for more info
const app=express()
 app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/static1.html') //backtick ` allows to write in multiple lines

})


app.listen(3001,()=>console.log("server started"))
//install nodemon to avoid restarting server everytime.It restarts automatically for us.run like"nodemon hello.js"