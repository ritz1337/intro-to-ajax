function makeRequest(evt) {
  var numbers = $('input').val();
  $.post('/calc', {numbers: numbers}, handleResponse);
}

function handleResponse(res) {
  if (res.error) {
    return $('#answer').text(res.error.message);
  }
  $('#answer').text(res.data.answer);
}

$('button').on('click', makeRequest);
