// Write any custom javascript functions here
$(document).ready(function(){
	$(window).trigger('scroll');
	$(window).on("scroll resize click", function(){
		$(".gallery_box").each(function(){
			$(this).css({"height": ($(this).width()*2) + "px"});
		});

		$(".outer_box").each(function(){
			$(this).css({"min-height": ($(this).width()/2.4) + "px"});
		});
	});

});


