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
extname: 'hbs'
//new configuration parameter
defaultLayout: 'planB',
//new configuration parameter
partialsDir: __dirname + '/views/partials/'
}));

//ELIMINAR ESTA LINEA: app.use(express.static('public'))
//app.use(express.static('public'))
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
//instead of res.render('main', {layout: 'index'});
//Using the index.hbs file instead of planB
//res.render('main',;
res.render('main', {layout: 'index'});});

//});

//ELIMINAR ESTA LINEA: app.listen(port, () => console.log(`App listening to port ${port}`));
//app.listen(port, () => console.log(`App listening to port ${port}`));