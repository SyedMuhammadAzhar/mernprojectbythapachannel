
const express= require('express');
const router = express.Router();




const User = require('../models/userSchema');


router.post('/registration',(req,res)=>{

    console.log("hello from registration");

    const {name,email,phone, work,password,cpassword,date}=req.body;
    

    
if(!name || !email || !phone || !work || !password || !cpassword,!date){

    return res.json({message:"Fill all the field"});

}

    User.findOne({email:email}).then((emailExist)=>{

        if(emailExist){
            return res.json({message:"Email already exist"});
        }
        else{

            const user = new User({name,email,phone, work,password,cpassword,date});
            user.save().then(()=>{
               return res.json({message:"New user added"});
            })
            .catch(err=>{
                return res.json({error:"failed to register user",
                                message:err
                                });
            })

        }


    })
    .catch(err=> res.json({messgae:err}))



})



module.exports=router;