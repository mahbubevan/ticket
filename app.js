const express = require('express');
const app = express();
const port = 5000;
const ejs = require('ejs');
const sess = {
          secret:"secretisknown",
          resave:false,
          saveUninitialized:true,
};

const bodyParser = require('body-parser');
const session = require('express-session');

const createAirportNameController = require('./controllers/admin/airTicketSystem/airportList/create/createAirportName')
const airTicketSystemController = require('./controllers/admin/airTicketSystem/airTicketSystemController');
const getAirportList = require('./controllers/admin/airTicketSystem/airportList/read/getAirportList');
const adminLoginController = require('./controllers/admin/login/adminLoginController');
const adminLogoutController = require('./controllers/admin/logout/adminLogoutController');
const createFlightNameController = require('./controllers/admin/airTicketSystem/flightList/create/createFlightName');
const getFlightList = require('./controllers/admin/airTicketSystem/flightList/read/getFlightList');
const createAirRoute = require('./controllers/admin/airTicketSystem/airRoute/create/createAirRoute');
const getAirRouteList = require('./controllers/admin/airTicketSystem/airRoute/read/getAirRouteList');
//configuration
app.set('view engine','ejs');


//Middlewares
app.use('/assets',express.static('assets'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session(sess));

//Routes
app.use('/airticket',airTicketSystemController);
app.use('/createairportname',createAirportNameController);
app.use('/createflightname',createFlightNameController);
app.use('/getairportlist',getAirportList);
app.use('/adminlogin',adminLoginController);
app.use('/adminlogout',adminLogoutController);
app.use('/getflightlist',getFlightList);
app.use('/createairroute',createAirRoute);
app.use('/getairroutelist',getAirRouteList);

//server-startup
app.listen(port,()=>console.log('Server Running: '+port));
