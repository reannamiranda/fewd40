
$(function() {
  $(window).scroll( function(){
    
    $('.hideme').each( function(i){
            
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
            
      bottom_of_window = bottom_of_window + 200;  
          
      if( bottom_of_window > bottom_of_object ){
                
        $(this).animate({'opacity':'1'},1000);
                    
      }
    }); 
  });
});


$(window).load(function(){

  $('body').on('click', '.results-trigger', function() {
    $('.poll-vote-list').fadeOut(500);
    $('.poll-results-list').delay(500).fadeIn(500);
    $(this).hide();
    $('.poll-results-list li .percentage').each(function() {
      var value = $(this).text();
  
      $(this).closest('li').find('.nul').removeClass('inner-bar null').addClass('voted');
      $(this).closest('li').find('.inner-bar').animate({width: value}, 1000);
      $(this).closest('li').find('.voted').delay('1000').animate({width: value}, 1000);
      $('.percentage').delay('2000').fadeIn('fast');
    });
    return false;
  });

});

