const express = require ('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tw8naco.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {serverApi: {version: ServerApiVersion.v1,strict: true, deprecationErrors: true}});

console.log(uri)
async function run() {
    try {
        const productCollection = client.db('borolokerGadget').collection('products');
       

        // Use Aggregate to query multiple collection and then merge data
        app.get('/products', async (req, res) => {
            const query = {};
            const options = await productCollection.find(query).toArray();

            res.send(options);
            
        });

       

       

    }
    finally {

    }
}
run().catch(console.log);

app.get('/', async (req, res) => {
    res.send('borolokerGadget server is running');
})

app.listen(port, () => console.log(`BorolokerGadget running on ${port}`))