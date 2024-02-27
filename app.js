const express=require("express");
const app=express();
const path=require("path");

app.set('views engin','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.listen(8080,()=>{
    console.log('listing at port no. 8080');
})

app.get('/',(req,res)=>{
    res.send("you are in root page");
})

app.get('/get',(req,res)=>{
    res.render('hello.ejs');
})