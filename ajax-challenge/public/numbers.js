console.log('NUMBERS');;

// on button click
$('button').click(function(e) {
  // validate input
  var numbers = $('input').val()
  var $h2 = $('h2');
  // POST input value to /calc
  $.post('/calc', {key: numbers}, function(response) { // ajax post with 3 parameters - URL to request, data to send with request, callback function
    console.log(response);
    if(response.data){ //if response object has key data
    $h2.text("");
    $h2.append(response.data.answer)
    }
   else if(response.error){ // if response object has key error
    $h2.text("");
    $h2.append(response.error.message)
    }
  });

})



// if want it to work on Enter, put name the entire function,
// and run it on either button click OR enter key on input field.


// both server.js and numbers.js methods are post because
// numbers.js is using a post request and server.js is listening for a post request.
