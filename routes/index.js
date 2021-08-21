const express = require ('express');
const router = express.Router();
const apikeymiddle = require('../middlewere/apikey')
const path = require('path');

router.get('/',(req,res)=>
{
    res.render('index', {
        title:'Home page'
    })
})

router.get('/about',(req,res)=>
{
    res.render('about', {
        title:'About page'
    })
})




module.exports = router;