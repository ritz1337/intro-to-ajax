var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/user', function(req, res) {
  res.json({
    data: {
      name: "Toby"
    }
  });
});

app.post('/calc', function(req, res) {
  var numbers = req.body.numbers.split(',').map(function(number){
    return parseInt(number);
  });
  if (numbers.length < 2 || numbers.includes(NaN)) {
    return res.json({
      error: {
        code: 404,
        message: "Please include a comma separated list of numbers"
      }
    });
  }
  var sum = numbers.reduce(function(prev, curr) {
    return prev + curr;
  }, 0);
  return res.json({
    data: {
      answer: sum
    }
  });
})

var port = 3000;
app.listen(port, function(){
  console.log('listening');
});
