const express = require('express');
const app =express();

app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/'+'index.html');
});

app.post('/submit',(req,res)=>{
     var first = req.body.first_name;
     var last = req.body.last_name;
    res.send(`<h1>Hello ${first} ${last}, welcome to the Express server!</h1>`);
});

app.listen(5000, () => {
    console.log("server is listening on port 5000");
})