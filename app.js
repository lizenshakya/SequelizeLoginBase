const path = require('path');
require('dotenv').config({path: path.join(__dirname, './.env')})
const express = require('express');
const morganLogger = require('morgan');
const db = require('./models');
const app = express();
const router = require('./routes');
//const dbConnector = require('./helpers/database.helper');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs');
const { sanitize } = require('./utils/sanitizer');
const { uuid } = require('uuidv4');

const cors = require('cors');
app.use(cors());
app.options('*', cors());

app.use(morganLogger('dev'));

// //middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//dbConnector.init(app);

app.use((req, res, next) => {
   req.debugId = uuid();
   req.ipAddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
   req.device = req.header("user-agent") || "";
   next()
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', sanitize(), router);
app.use('/', (req, res, next) => {
    res.status(200);
    res.send('Hello World');
});
//route not found error handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
  
  //global error handler thrown in next
  app.use((error, req, res, next) => {
    if(error.isJoi === true) {
      const errorMessages = error.details.map(element => {
        return {
          message: element.message,
          field: element.path
        }
      })
      return res.status(422).json({
        errors:{
          errorMessages
        }
      });
    } else {
      return res.status(error.status || 500).json({
      error:{
        message: error.message
      }
    });
    }
    
})

db.sequelize.authenticate().then(function () {
	console.log('Nice! Database looks fine');
}).catch(function (err) {
	console.log(err, "Something went wrong with the Database Update!")
});

// db.sequelize
//   .sync({
//     logging: console.log,
//     force: true
//   })
//   .then(() => {
//     console.log('Connection to database established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = app;