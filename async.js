var fs=require('fs')
console.log("program started")
fs.readFile('demo.txt','utf-8',(err,data)=>{
    console.log(data)
})
console.log("program ended")