const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"
const dbname = "dummy"

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/text.html")
});

app.get('/submit',async(req,res)=>{
    const client = new MongoClient(url);
    try{
        await client.connect();
        const db = client.db(dbname);
        const col = db.collection("stud");
        let {usn, name, sb_code, cie} = req.query;
        let parsedmark = parseInt(cie);
        await col.insertOne({usn, name, sb_code, cie:parsedmark});
        const resu = await col.find({cie:{$gt:20}}).toArray();
        let rese = "";
        resu.forEach(doc=>{rese+=`<h2>${doc.usn} ${doc.cie}</h2><br>`});
        res.send(rese);
    }finally{
        await client.close();
    }
});

app.listen(5000,()=>{
    console.log("listning on port 5000");
})