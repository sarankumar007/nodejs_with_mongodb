var http=require("http")
var server=http.createServer(function(req,res){
    res.write("hello saran")
    res.end()
}).listen(3001,()=>{
    console.log("sarannnnnnnnnnnnnnnnnn")
})