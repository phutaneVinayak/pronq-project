
$(document).ready(function(){
    $('#partner2').mouseover(function(){
    		$('.media').find('.tringle').removeClass().addClass('tringle2');
    		
    }).mouseout(function(){
    		$('.media').find('.tringle2').removeClass().addClass('tringle');
    });
});