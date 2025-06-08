const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const dbname="dummyy";

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
})

app.get("/submit",async(req,res)=>{
     const client = new MongoClient(url);
     try{
         await client.connect();
         const dbb = client.db(dbname);
         const col = dbb.collection("dum");
         const {name, usn, dept, grade} = req.query;
        await col.insertOne({name, usn, dept, grade});
        const resu = await col.find({}).toArray();
        let ans = "<h1> All values </h1><br>";
        resu.forEach(doc=>{ans+=`<h3>${doc.name} ----- ${doc.usn}-----${doc.dept}----${doc.grade}</h3> <br>`});
        res.send(ans);
     }finally{
        await client.close();
     }

});

app.get("/update",async(req,res)=>{
     const client = new MongoClient(url);
     try{
         await client.connect();
         const dbb = client.db(dbname);
         const col = dbb.collection("dum");
         const {name, grade} = req.query;
        await col.updateOne({name},{$set:{grade}});
        const resu = await col.find({}).toArray();
        let ans = "<h1> All values </h1><br>";
        resu.forEach(doc=>{ans+=`<h3>${doc.name} ----- ${doc.usn}-----${doc.dept}----${doc.grade}</h3> <br>`});
        res.send(ans);
     }finally{
        await client.close();
     }

});

app.listen(5000,()=>{
    console.log("listning to you at 5000!!!!!!");
})