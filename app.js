require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'public/images'});



const methodOverride = require('method-override');
const session = require('express-session');

const localsUserCheck = require('./middlewares/localUserCheck');
const cookieCheck = require('./middlewares/cookieCheck')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();
var bcryptjs = require('bcryptjs');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(methodOverride('_method'));         
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret : 'ceramicass',
  resave : false,
  saveUninitialized : true
}));

app.use(cookieCheck);
app.use(localsUserCheck);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// catch 404 and forward to error handler//////prueba///////
app.use(function(req, res, next) {
  next(createError(404));
});
      

/* app.post('/upload',upload.single('imagen'), (req,res)=>{
 fs.renameSync(req.file.path, req.file.path +'.'+ req.file.mimetype.split('/'[1]));
  res.send('check Imagen');
}) */

/*app.post('/login', async (req,res)=>{
 var user = req.body.user;
 var password = req.body.password;
 if(user == 'admin' && password == '1234'){
  let passwordHash = await bcryptjs.hash(password, 8);
  res.json({
    message :'¡AUTENTIFICACIÓN EXITOSA!',
    passwordHash : passwordHash
  });
}else{
  res.json({
    message : '¡INGRESE CORRECTAMENTE SUS  DATOS!'
  })
};*/

///////////////////////prueba//////////////////////////


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});  



module.exports = app;
