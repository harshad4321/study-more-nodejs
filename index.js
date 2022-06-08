const express =require("express");
const app = express();

//--------------------------------
const { loggers,myname} = require('./utils');
console .log("2*5=", loggers( )); 
console.log(myname)
//-----------------------------------

const path = require("path");

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view","index.html"));
})

app.get("/sent",(req,res)=>{
    res.sendFile (path.join(__dirname,"view","app.html"))
})

app.get("*",(req,res)=>{
    res.status(404).send("<h1>404<h1>");  //chaining ;
})


const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
console.log(`server running in ${PORT}`)
})