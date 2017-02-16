
$(document).ready(function(){
    $('#partner2').mouseover(function(){
    		// $('.media').hide();
    		// $('.media').find('.tringle').removeClass().addClass('tringle2');
    		// $('.rp_feedback').show();
    		// $('.media').show();
    		$(".new").hide();
    		$('.rp_feedback').show();
    }).mouseout(function(){
    		// $('.media').hide();
    		// $('.media').find('.tringle2').removeClass().addClass('tringle');
    		// $('.media').find('.media-body').removeClass().addClass('rp_feedback');
    		// $('.media').find('.avnet_feedback').removeClass().addClass('media-body');
    		// $('.media').show();
    		$(".new").show();
    		$('.rp_feedback').hide();
    });
});