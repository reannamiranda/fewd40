$('.button').click(prevent);
	function prevent(){
	event.preventDefault();
}

$(document).ready(function(){
})

$('.readmore').click(function(){
	$('#show-this-on-click').slideDown();
})

$('.readmore').click(function(){
	$('.readless').show();
})

$('.readmore').click(function(){
	$('.readmore').hide();
})

$('.readless').click(function(){
	$('.readless').hide();
})

$('.readless').click(function(){
	$('#show-this-on-click').slideUp();
})

$('.readless').click(function(){
	$('.readmore').show();
})

$('.learnmore').click(function(){
	$('#learnmoretext').slideToggle();
})

$('.learnmore').click(function(){
	$('.learnmore').hide();
})

$('.nav').hover(function(){
    $(this).css('color','white');
    }, function(){
    $(this).css('color','#f9e42e');
})
