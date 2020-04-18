const { MongoClient } = require('mongodb');

// database connection
const URL = "mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb";
const dbName = "react-node3";
let db;


MongoClient.connect(URL, (err, client) => {
    console.log("database connected successfully");
    db = client.db(dbName);
});

exports.fetchData = (collectionName) => {
    return new Promise((reject, resolve) => {
        db.collection(collectionName).find().toArray()
            .then(doc => resolve(doc))
            .catch(err => reject(err))
    })
};

exports.createData = (collectionName, data) => {
    return new Promise((reject, resolve) => {
        db.collection(collectionName).insertOne(data)
            .then(doc => resolve(doc))
            .catch(err => reject(err))
    })
};

exports.fetchOnedata = (collectionName, payload) => {
    return new Promise((reject, resolve) => {
        db.collection(collectionName).findOne(payload)
            .then(doc => resolve(doc))
            .catch(err => reject(err))
    })
};