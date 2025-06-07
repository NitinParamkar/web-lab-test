const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.sendFile(__dirname + '/'+'index.html');
});

app.get('/submit',(req,res)=>{
    var first_name= req.query.first_name;
    var last_name= req.query.last_name;
    res.send(`<h1>Hello ${first_name} ${last_name}, welcome to the Express server!</h1>`);
});


app.listen(5000, ()=>{
    console.log("server is listening on port 5000");
})