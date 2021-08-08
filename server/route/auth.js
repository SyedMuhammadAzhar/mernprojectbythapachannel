const express= require('express');
const router = express.Router();


router.post('/registration',(req,res)=>{

    console.log("hello from registration");
    res.json(req.body);
})



module.exports=router;