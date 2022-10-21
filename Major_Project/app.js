const express=require('express')
const app=express()
app.set('view engine','ejs')
app.set('views','./views')
app.get('/',(req,res)=>{ 
    res.render('index',{})
})
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({
    extended:true
}))

mongoose.connect("mongodb://localhost:27017/lol",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection
db.on('error',()=>console.log('connection error'))
db.once('open',()=>{
    console.log("connected to db")
})
app.post('/submit',(req,res)=>{
    var fn=req.body.sname
    var pl=req.body.Course
    var a=req.body.age
    var x=req.body.email
    var user={
        "Student_name":fn,
        "Course":pl,
        "Age":a,
        "Email":x

    }
    db.collection('sk2').insertOne(user,(err,collection)=>{
        if(err)
        throw err
        else
        console.log("document has been saved!")
    })
    return res.redirect('success.html')
})

app.get('/',(req,res)=>{
    return res.redirect('index.ejs')
}).listen(3000)
console.log("server started")

