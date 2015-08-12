$(function(){
	$("nav ul li").click(function(){
	  var xcoord = $(this).data("xcoord");
	  var width = $(this).data("width");
	  var target = $(this).data("target");
	  $("nav div").stop().animate({marginLeft:xcoord,'width':width}, 500);
	  $(this).addClass("active");
	  $("nav ul li").not(this).removeClass("active");
	  $('.ar_wrapper').hide();
	  $('#'+target).show();
	});	
})