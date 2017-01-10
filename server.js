var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calc', function(req, res) {
  console.log(req.body);
  console.log(req.get('Content-Type'));
  res.json({message: 'ok', body: req.body});
})

var port = 3000;
app.listen(port, function(){
  console.log('listening');
});
