var fs=require('fs')
console.log("program started")
var data=fs.readFileSync('demo.txt')
console.log(data.toString())
console.log("program ended")