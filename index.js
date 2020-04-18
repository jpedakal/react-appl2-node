const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const artist = require('./api/artist');
const get_artist = require('./api/get_artist');
const artist_details= require('./api/artist_data');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

// routes
app.use('/', artist);
app.use('/', get_artist);
app.use('/',artist_details);

const Port = 5000;
app.listen(Port, () => {
    console.log(`serer running on port ${Port}`);
});