const express =require("express");
const app = express();

//--------------------------------
const { loggers,myname} = require('./utils');
console .log("2*5=", loggers( )); 
console.log(myname)
//-----------------------------------

// app.use(express.static("view")) //app-level middleware


app.get("/profile",Token,validaction ,(req,res)=>{ 
    console.log("user is logged")
     res.send("<h1>success..</h1>");   
   });


function Token(req,res,next){
    console.log("created tocken");
    setInterval(()=>{
        const Token= "123"
        req.token=Token
         next();
    },1000);

}
function validaction (req,res,next){
    if(req.token){
    console.log(" tocken  approved")
     next(); }
   }

// app.get("*",(req,res)=>{
//     res.status(404).send("<h1>404<h1>");  //chaining ;
// })


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
console.log(`server running in ${PORT}`)
})