const express =require("express");
const app = express();


const Token = require("./middleware/token")
const validaction = require("./middleware/validation");

app.use(DateGenerator);

const middleware= [Token,validaction];


app.get("/profile",middleware,(req,res)=>{ 
    console.log("user is logged")
     res.send("<h1>success..</h1>");   
    
   });

   app.get("/",(req,res)=>{ 
    console.log("user is default")
     res.send("<h1>Home</h1>");   
    
   });

   function DateGenerator(req,res,next){
       console.log("current Date",new Date())
       next()
   }
   

// app.get("*",(req,res)=>{
//     res.status(404).send("<h1>404<h1>");  //chaining ;
// })


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
console.log(`server running in ${PORT}`)
})