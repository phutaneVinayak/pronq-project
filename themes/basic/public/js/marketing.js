$(document).ready(function(){
	console.log("document fired");
	$('#play').click(function(){
		console.log("enevt called ");
		$(this).parents('.video-container').hide();
		$('.video-wrapper').show();
	})
	var test;
	var test;
	var elements;
	var element;
	$('.media_review .media_logo').mouseover(function(){
		test = $(this).attr('id');
		console.log("test::::::::::",test);
		if(test == "circle1" || test == 'circle3'){
			console.log("gotach:::::::::::::");
			element = $(this).prev();
			//console.log("founded elements :::::::",element);
			if (element.attr('id') == "box1" || element.attr('id') == "box3") {
			 	console.log("howrry1");
		 		element.css("visibility","visible");
		 		element.addClass('animated').addClass('slideInLeft');
			}
		}
		else if (test == "circle2" || test == "circle4") {
			console.log("gotach right side");
			element = $(this).next();
			//console.log("right side :::::::",element);
			if (element.attr('id') == "box2" ||element.attr('id') == "box4") {
			 	console.log("howrry4");
		 		element.css("visibility","visible");
		 		element.addClass('animated').addClass('slideInRight');
			}
		}
		else
		{
		 	console.log("error");
		}
	}).mouseout(function(){
		element.removeClass('animated').removeClass('slideInLeft').removeClass('slideInRight');
		element.css("visibility","hidden");
	})

/*	var hover_img;
	$('.partner_icon').mouseover(function(){
		hover_img = $(this).attr('id');
		 if (hover_img == 'partner_img_2') {
			$('.media').find('.tringle').addClass('tringle2').removeClass('.tringle');
		}
		else if (hover_img == 'partner_img_3') {
			$('.media').find('.tringle').addClass('tringle3').removeClass('.tringle');
		}
		else if (hover_img == 'partner_img_4') {
			$('.media').find('.tringle').addClass('tringle4').removeClass('.tringle');
		}
		else{
			console.log("error in hover_img");
		}
	}).mouseout(function(){
		$('.media').find('.tringle2').addClass('tringle').removeClass('.tringle2');
	});*/
})