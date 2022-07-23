const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');
//Initialiazations
const app = express();
require('./database');
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
//Global Variables

//Routes
app.use(require('./routes/Index'));
app.use(require('./routes/Paciente'));
app.use(require('./routes/Professional'));
app.use(require('./routes/Schedule'));
app.use(require('./routes/Turno'));
app.use(require('./routes/obraSocial'));
//Static Files
app.use(express.static(path.join(__dirname,'public')));
//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});