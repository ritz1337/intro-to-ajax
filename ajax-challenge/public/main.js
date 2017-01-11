console.log("Hello");


$( 'button').click( function(e){
  $.get('/user', function(data){
    var $name = $('<h1>').text(data.data.name + " " + data.data.age)
    $('body').append($name)
  })
})

// $.ajax way - more complex
// $( 'button' ).click( function(e) {
//   $.ajax({
//     type: "GET",
//     url: '/user',
//     dataType: 'json',
//     success: function( data ){
//       console.log( data.data.name )
//       var $name = $( '<h1>' ).text( data.data.name )
//       $( 'body' ).append( $name )
//       console.log( 'success: ' + data )
//     },
//     error: function( exception ) {
//       alert( 'Exeption:' + exception )
//     }
//   })
// })

