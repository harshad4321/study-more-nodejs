

function validaction (req,res,next){
    if(req.token){
    console.log(" tocken  approved")
     next(); 
     return;
    }
 }
 module.exports=validaction;