const express =require("express");
const app = express();


const Token = require("./middleware/token")
const validaction = require("./middleware/validation")


app.get("/profile",Token,validaction ,(req,res)=>{ 
    console.log("user is logged")
     res.send("<h1>success..</h1>");   
   });


// app.get("*",(req,res)=>{
//     res.status(404).send("<h1>404<h1>");  //chaining ;
// })


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
console.log(`server running in ${PORT}`)
})