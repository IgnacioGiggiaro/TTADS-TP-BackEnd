const cors= require('cors');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');
const conect = require('./database');

//Initialiazations
const app = express();
//require('./database');

conect();
app.use(cors())
app.use(morgan('tiny'));

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    patialsDir: path.join(app.get('views'), 'partials'),
    extname:'.hbs'
}));
app.set('view engine', '.hbs');
//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret:'mysecretapp',
    resave:true,
    saveUninitialized:true
}));
app.use(express.json());
//Global Variables

//Routes
app.use(require('./routes/Index'));

//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});