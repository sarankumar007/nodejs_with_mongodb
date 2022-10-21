var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('demo.txt',function(err,data){
        if(err) throw err
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log("server started"))