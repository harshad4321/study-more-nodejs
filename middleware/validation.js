

function validaction (req,res,next){
    if(req.token){
    console.log(" tocken  Approved")
     next(); 
     return;
    }
 }
 module.exports=validaction;