var cities = ["Select a city", "NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function() {
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    
    if(city == 'Select a city') {
      $('body').attr('class','select-a-city');
    }
    if(city == 'NYC') {
      $('body').attr('class','nyc');
      $('#cityname').html('New York');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
      $('#cityname').html('San Francisco');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
      $('#cityname').html('Los Angeles');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
      $('#cityname').html('Austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
      $('#cityname').html('Sydney');
    }
  });
});
