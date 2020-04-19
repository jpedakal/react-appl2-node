const express = require('express');
const router = express.Router();
const mongo = require('../mongodb');

router.get('/articles', (req, res) => {

    let payload = {
        "author": req.query.author ? req.query.author : "",
    }
    if (payload.author === "") {
        payload = {}
        const collectionName = "article";
        mongo.fetchData(collectionName, payload)
            .then(doc => res.json(doc))
            .catch(err => res.json(err))
    } else {
        const collectionName = "article";
        mongo.fetchData(collectionName, payload)
            .then(doc => res.json(doc))
            .catch(err => res.json(err))
    }

});

module.exports = router;