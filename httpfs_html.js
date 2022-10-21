var http=require('http')
var fs=require('fs')
http.createServer(function(req,res){
    fs.readFile('web.html',function(err,data){
       res.writeHead(200,{             //res.writeHead() is optional but useful in future when referring to types...
        // 'content-type':'text/plain'
        'content-type':'text/html'
       })
        res.write(data)
        res.end()
    })
}).listen(3000,()=>console.log("server started"))