//Read file
const fs=require('fs');
fs.readFile(__dirname+"/demo.txt","utf-8",(err,data)=>{
    if(err) throw err
    console.log(data)
});
//delete file
fs.unlink('demo.txt',(err)=>{
    if(err) throw err;
    console.log("file deleted");
})