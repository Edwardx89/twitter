const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweet = tweetBank.list();
  res.render( 'index', {tweets: tweet} );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list, name: name } );
  console.log(list)
});

router.get('/users/:name', function(req, res) {

})

module.exports = router;
