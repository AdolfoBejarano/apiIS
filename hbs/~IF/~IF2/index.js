const express = require('express');
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars');
//Sets our app to use the handlebars engine
//instead of app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');
//Sets handlebars configurations (we will go through them later on)
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', handlebars({
layoutsDir: __dirname + '/views/layouts',
extname: 'hbs',
defaultLayout: 'planB',
//new configuration parameter
partialsDir: __dirname + '/views/partials/'
}));
app.get('/', (req, res) => {
//Using the index.hbs file instead of planB
res.render('main', {layout: 'index'});});