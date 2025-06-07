const {MongoClient} = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const dbname = 'prac-web'

async function run(req,res){
const client  = new MongoClient(uri);
try{
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db(dbname);
    const col = db.collection('users');
    await col.insertOne({name:'lalit bhai',age:52});
    console.log("Inserted data");
    const all = await col.find().toArray();
    console.log('All documents:', all);
}finally{
    await client.close();
    console.log("Connection closed");
}
}

run().catch(console.error);