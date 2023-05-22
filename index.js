const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config()

const app = express();
// middlewere
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tw8naco.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, { serverApi: {version: ServerApiVersion.v1,strict: true, deprecationErrors: true,}});

async function run(){
    try{

    }
    finally{

    }
}
run().catch(console.log)

app.get('/', async(req,res)=>{
    res.send('boroloker gadGet Server is running!!!!!')

})

app.listen(port, ()=> console.log(`boroloker-server site runing on ${port}`))