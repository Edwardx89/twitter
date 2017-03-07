const express = require('express');
const app = express();
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank')
const routes = require('./routes')

app.listen(3000, function(){
  console.log("server listening")
});

app.use(volleyball);
app.use(express.static('public'))
app.use('/', routes)

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

