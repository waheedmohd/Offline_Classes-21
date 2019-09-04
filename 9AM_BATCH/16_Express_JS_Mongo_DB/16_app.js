const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'infosys';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    console.log("Connected successfully to MongoDB Database");
    const db = client.db(dbName);

    /*  ------------------------------- START CODE HERE -------------------------- */



    /*  ------------------------------- END CODE HERE -------------------------- */

});
