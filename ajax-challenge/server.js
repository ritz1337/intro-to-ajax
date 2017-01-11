var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var bodyparser = require('body-parser');


var app = express();

app.use(morgan('dev'));

app.use(favicon(__dirname + '/public/cloud.ico'));

app.use(express.static(__dirname + '/public'));

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.get('/user', function(req, res){
  res.send({
    "data": {
      "name": "Toby",
      "age": "9"
    }
  })
})

app.post('/calc', function(req, res){
  console.log('REQ BODY: ', req.body)
  var input = req.body.key;
  var arr = input.split(',');
  if (!arr.some(isNaN) && arr.length > 1) { // checks if all array items are numbers
    for (var i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i], 10);
    }
    console.log(arr);
    var sum = arr.reduce(function (a,b) {
      return a + b;
    })

    res.json({
      data: {
        answer: sum
      }
    });
  } else {
    res.json({
      error: {
        code: 404,
        message: "Please include a comma separated list of numbers"
      }
    })
  }
});



var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});
