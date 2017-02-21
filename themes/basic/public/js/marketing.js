$(document).ready(function(){
	console.log("document fired");
	$('#play').click(function(){
		console.log("enevt called ");
		$(this).parents('.video-container').hide();
		$('.video-wrapper').show();
	})
})