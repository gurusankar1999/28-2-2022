let http=require("http")
 
let port=4000
http.createServer((req,res)=>{

res.end("Data will be written")


}).listen(port)