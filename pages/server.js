const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
});
app.get("/academics",(req,res)=>{
    res.sendFile(__dirname+"/academics.html");
});
app.get("/registration",(req,res)=>{
    res.sendFile(__dirname+"/registration.html");
});

app.listen(5000, ()=>{
    console.log("port is listening at 5000");
})