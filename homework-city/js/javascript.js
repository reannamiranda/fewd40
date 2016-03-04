$( document ).ready(function() {
  });

$('#entry').on('submit', function(e){
  e.preventDefault();
  showCity();
  console.log('change background');
})

function showCity () {
    var userEntry = $('#city-type').val();

    if(userEntry == 'New York' || userEntry == 'New York City' || userEntry == 'NYC'){
    $('body').css('background-image','url("images/nyc.jpg")');
    $('#cityname').html(userEntry);
    }

    else if(userEntry == 'San Francisco' || userEntry == 'Bay Area' || userEntry == 'SF'){
    $('body').css('background-image','url("images/sf.jpg")');
    $('#cityname').html(userEntry);
    }

    else if(userEntry == 'Los Angeles' || userEntry == 'LAX' || userEntry == 'LA'){
    $('body').css('background-image','url("images/la.jpg")');
    $('#cityname').html(userEntry);
    }

    else if(userEntry == 'Austin' || userEntry == 'ATX'){
    $('body').css('background-image','url("images/austin.jpg")');
    $('#cityname').html(userEntry);
    } 

    else if(userEntry == 'Sydney' || userEntry == 'SYD'){
    $('body').css('background-image','url("images/sydney.jpg")');
    $('#cityname').html(userEntry);
    } 

     $('userEntry').val('');
     $('#city-type').val('');
};


$('#submit-btn').on('submit', showCity);
