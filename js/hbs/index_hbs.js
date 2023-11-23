const express = require('express');
const port = 3000;

const handlebars = require('express-handlebars');

const { engine } = require ('express-handlebars');
const app = express();



//app.engine('hbs', handlebars({
app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'planB',
    partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'hbs');
app.use(express.static('public'))

fakeApi = () => {
return [
        {
            name: 'YYY1-Katarina',
            lane: 'midlaner'
        },
        {
            name: 'YYY1-Jayce',
            lane: 'toplaner'
        },
        {
            name: 'YYY1-Heimerdinger',
            lane: 'toplaner'
        },
        {
            name: 'YYY1-Zed',
            lane: 'midlaner'
        },
        {
            name: 'YYY1-Azir',
            lane: 'midlaner'
        }
];
}

app.get('/', (req, res) => {
    res.render('main', {layout: 'index', suggestedChamps: fakeApi(), listExists: true});
});

app.listen(port, () => console.log(`App listening to port ${port}`));