var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

router.get('/', (req, res, next) => {
    res.send('foobar');
});


console.log(1)

// IIT

router.get('./', (req, res, next)=>{
    CC.CC()
    res.json({ msg:'Scraping started'});
    console.log(2)
});

router.get('./', (req, res, next) => {
    schema.find(function(err, data){
        if(!err){
            res.json(data);
        }
        else{
            console.log(err);
        }
    });
});


module.exports = router;