const cors= require('cors');
const express = require('express');
const path = require('path');
require('dotenv').config();
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');
const conect = require('./database');
//const { auth } = require('express-oauth2-jwt-bearer');


//Initialiazations
const app = express();
require('./database');

conect();
app.use(cors())
app.use(morgan('tiny'));


//const jwtCheck = auth({
//    secret: 'b4pnK8xyYvCvb17QfLImkoNyCrYcsHgr',
//    audience: 'http://localhost:3001/',
//    issuerBaseURL: 'https://dev-h5ly1w0dacya3m3n.us.auth0.com/',
//    tokenSigningAlg: 'HS256'
//});

// enforce on all endpoints
//app.use(jwtCheck);
// enforce on all endpoints

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