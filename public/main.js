$('button').on('click', function(evt){
  $.get('/user', function(res) {
    $('#user').text(res.data.name);
  });
});
