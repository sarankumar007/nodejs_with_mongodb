const express=require('express')
const app=express()
app.set('view engine','ejs')
app.set('views','./views')
app.get('/test',(req,res)=>{ 
    //localhost/test
    const user={
        name:'saran',
        age:10
    }
    res.render('test',{user})
})
app.listen(3001,()=>console.log("server started"))