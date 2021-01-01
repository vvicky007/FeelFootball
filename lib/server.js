import server from './renderers/server';
const bodyParser = require('body-parser');
const express = require('express');
const config = require('./config');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');


app.use(cookieParser());
//session will create a cookie with that secret
app.use(session({ secret: 'library' }));
require('./passport.js')(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine','ejs');
const authRouter = require('./routes/authRoutes')();
app.use('/auth',authRouter)
app.get('/*',(req,res)=>{
  const initialContent = server(req)
  res.render('index',{initialContent});
});

app.listen(process.env.PORT || config.port,()=>{
  console.info('running on '+config.port);
});
