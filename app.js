const express = require('express');
const app = express();
const volleyball = require('volleyball');
// const logger = volleyball.custom({debug:true})

app.listen(3000, function(){
  console.log("server listening")
});

app.use(volleyball);

app.get('/', function(request, response){
  response.send("Hello World");
})

app.get('/is-anybody-in-there', function(request, response, next){
  response.send("Hello World");
  next();
})




