const express = require('express');
const router = express.Router();
const mongo = require('../mongodb');

router.get('/articles', (req, res) => {
    const payload= {
        "author": req.query.author
    }
    const collectionName = "article";
    mongo.fetchData(collectionName, payload)
        .then(doc => res.json(doc))
        .catch(err => res.json(err))
});

module.exports = router;