const express = require('express');
const router = express.Router();
const mongo = require('../mongodb');

router.get('/artist/:name', (req, res) => {
    var collectionName = "artist";
    var payload = { name: req.params.name }

    mongo.fetchOnedata(collectionName, payload)
        .then(data => res.json(data))
        .catch(err => res.json(err))

});

module.exports = router;