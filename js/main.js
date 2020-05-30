$(document).ready(function(){
	var winH = $(window).height();
	var upperH = $('.upper-nav').innerHeight();
	var navH  = $('.nav-navbar').innerHeight();
	$('.slider, .carousel-item').height(winH - (upperH + navH));
});