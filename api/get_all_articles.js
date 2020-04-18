const express = require('express');
const router = express.Router();
const mongo = require('../mongodb');

router.get('/artist', (req, res) => {
    const collectionName = "article";
    mongo.fetchData(collectionName)
        .then(doc => res.json(doc))
        .catch(err => res.json(err))
});

module.exports = router;