const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const bdp = require("body-parser");
const router = express.Router();
const mongoose = require("mongoose");

const roundController = require('../controllers/roundController');

router.get('/',(req,res)=>{
    try {
        res.render('home');
    } catch (error) {
        console.log(error);
    }
})

router.post('/', (req, res) => {
    roundController.create(req.body.namePlayer1,req.body.namePlayer2,req.body.namePlayer3,req.body.namePlayer4, function(err,round){
        if(err)
            console.log(err);
        res.redirect('/games/'+ round._id);
    })
    
})

module.exports = router;