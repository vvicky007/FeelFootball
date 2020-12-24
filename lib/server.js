import server from 'renderers/server'
import {data} from 'testdata'
const express = require('express');
const config = require('./config');
const app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
  const initialContent = server(req)
  res.render('index',{initialContent});
});
app.get('/data',(req,res )=>{
  res.status(200).json({
   "testdata":data
  })

})
app.listen(config.port,()=>{
  console.info('running on '+config.port);
});