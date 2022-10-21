var express=require('express')
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
const app=express()
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
app.post('/sign_up',(req,res)=>{
    var fn=req.body.fname
    var pl=req.body.place
    var a=req.body.age
    var user={
        "fname":fn,
        "place":pl,
        "ageeee":a
    }
    db.collection('users').insertOne(user,(err,collection)=>{
        if(err)
        throw err
        else
        console.log("document has been saved!")
    })
    return res.redirect('success.html')
})

app.get('/',(req,res)=>{
    return res.redirect('index.html')
}).listen(8080)
console.log("server started")

