//Loads the express module
const express = require('express');
//Creates our express server
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
//new configuration parameter
extname: 'hbs'
//new configuration parameter
defaultLayout: 'planB',
}));

//Serves static files (we need it to import a css file)
app.use(express.static('public'))
//Sets a basic route
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
//instead of res.render('main', {layout: 'index'});
res.render('main');
});
//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));