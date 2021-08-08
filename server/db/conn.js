const mongoose=require('mongoose');

const myDB=process.env.DATABASE;


mongoose.connect(myDB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("sucessfully connected to database");
}).catch(err=>{
    console.log("connection to database failed",err);
})