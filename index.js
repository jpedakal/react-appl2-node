const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const artist = require('./api/artist');
const get_article = require('./api/get_article');
const post_article= require('./api/post_article');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

// routes
app.use('/', get_article);
app.use('/',post_article);

const Port = 5000;
app.listen(Port, () => {
    console.log(`serer running on port ${Port}`);
});