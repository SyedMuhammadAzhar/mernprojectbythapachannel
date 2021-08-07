const express = require('express');

const app = express();

const mongoose =require('mongoose');

const myDB='mongodb+srv://azhar:azhar@cluster0.atgjo.mongodb.net/mernstackbythapa?retryWrites=true&w=majority';


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


app.get('/', (req,res)=>{
    res.send('Hello from home');
    
})


app.get('/about',(req,res)=>{
    console.log("hello from about");
    res.send('Hello from about');
})

app.get('/contact',(req,res)=>{
    res.send('Hello from contact');
})

app.get('/signin',(req,res)=>{
    res.send('Hello from signin');
})

app.get('/signup',(req,res)=>{
    res.send('hello from signup');
})



app.listen(3000,()=>{
    console.log("listening on port 3000");
})