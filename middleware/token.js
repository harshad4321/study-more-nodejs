
module.exports= function (req,res,next){
    console.log("created tocken");
    setInterval(()=>{
        const Token= "123"
        req.token=Token
         next();
    });
}
