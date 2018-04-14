const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const homeRouter = require('./router/homeRouter');
const gamesRouter = require('./router/gamesRouter');

mongoose.connect('mongodb://localhost/scoreKeeper',(err)=>{
    if(err) console.log(err);
    console.log("connected");
})

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('css'));

app.engine('handlebars', hbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');
app.use('/', homeRouter);
app.use('/games', gamesRouter);

app.listen(8080, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("App run in port 8080");
})