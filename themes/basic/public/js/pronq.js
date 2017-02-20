
$(document).ready(function(){
    $('#partner2').mouseover(function(){
    		$('.media').find('.tringle').removeClass().addClass('tringle2');
    		
    }).mouseout(function(){
    		$('.media').find('.tringle2').removeClass().addClass('tringle');
    });
    var temp;
    data = "<div Class='hover_cover'> <p class=''>"+ newdata +"</p> <a 		href='#' onclick='return false' class='close_link' style='text-decoration:none;'> Close </a> </div>"
    $('.cantainer-fluid .middle_container .tools .tool_box .learn_more a').click(function(evt){
    	evt.preventDefault();
    	var test = $(this).parent();
    	var realParent=test.parent();
    	temp = realParent.html();
    	realParent.html(data);
    });

    $(document).on('click', '.tool_box a.close_link', function(evt){
    	evt.preventDefault();
		var spaceholder = $(this).parent().parent()
		spaceholder.html(temp);
    	evt.preventDefault();
	});
});