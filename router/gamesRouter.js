const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const bdp = require("body-parser");
const router = express.Router();
const mongoose = require("mongoose");
const roundController = require('../controllers/roundController');

router.get('/:id', (req, res) => {
    try {
        let id = req.params.id;
        roundController.findById(id,(err,data)=>{
            if(err) console.log(err);
            res.render('games')
        })

        } catch (error) {
        console.log(error);
    }
})






module.exports = router;