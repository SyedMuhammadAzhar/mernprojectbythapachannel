require('dotenv').config();
const express = require('express');


const app = express();
const Port=process.env.PORT || 5000;


app.use(express.json());



require('./db/conn');

app.use(require('./route/auth'));


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



app.listen(Port,()=>{
    console.log(`listening on port ${Port}`);
})