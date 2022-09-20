require('./models/db');

const express = require('express');

const path =require('path');
const exphbs = require('express-handlebars');

const bodypar = require("body-parser");

const companyController = require('./controllers/companyController');

var app = express();


// app.set('views',path.join(__dirname,'/views/'));
// app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'main',layoutsDir: __dirname + '/views/layouts/'}));
// app.set('view engine', 'hbs');

app.use(bodypar.urlencoded({
    extended: true
}));
app.use(bodypar.json());


app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'body', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(1024, () =>{
    console.log('Connected to port 1024');
})

app.use('/company',companyController);