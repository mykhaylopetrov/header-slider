$(function() {

	/* Slick Slider */

	let slider = $(".slider__box");

	slider.slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
		
		prevArrow: $('.prev'),
      	nextArrow: $('.next'),
	});

	/* Burger Menu */

	let nav = $("#nav");
	let navToggle = $("#navToggle");

	navToggle.on("click", function(event) {
		event.preventDefault(); 

		nav.toggleClass("show");
	});

});