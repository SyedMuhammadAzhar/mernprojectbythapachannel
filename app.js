const express = require('express');

const app = express();



app.get('/', (req,res)=>{
    res.send('Hello from home');
})


app.get('/about',(req,res)=>{
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