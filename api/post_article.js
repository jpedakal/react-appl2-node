const express = require('express');
const router= express.Router();
const mongo= require('../mongodb');

router.post('/create_artist',(req,res)=>{
   var data= req.body;
   var collectionName= "artist";

   mongo.createData(collectionName, data)
       .then(result=> res.json(result))
       .catch(err=> res.json(err))
});

module.exports= router;