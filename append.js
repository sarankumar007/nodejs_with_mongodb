var fs=require('fs')
fs.appendFile('demo.txt','welcome to server side coding',function(err){
    if(err) throw err
    console.log("updated")
})