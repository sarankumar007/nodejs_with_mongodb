const express=require('express') //visit expressjs.com for more info
const app=express()
const middle=(req,res,next)=>{   //used for security when routing...provide in url =>?uid=node
    if(!req.query.uid)
    res.send('provide uid')
    else if(req.query.uid!='node'){
   res.send('invalid uid')
    }
    else{
        next()
    }
}
app.use(middle)

app.get('/',(req,res)=>{
    res.send(`<h2>learning Express js.</h2><br>
    <a href='/about' >about us</a><br>`) //backtick ` allows to write in multiple lines

})//put localhost:3000/saran

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/aboutus.html') 

})
app.listen(3001,()=>console.log("server started"))
//install nodemon to avoid restarting server everytime.It restarts automatically for us.run like"nodemon hello.js"