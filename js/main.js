/* =================================
------------------------------------
	Riddle - Portfolio
	Version: 1.0
 ------------------------------------ 
 ====================================*/



'use strict';


$(window).on('load', function() { 
	/*------------------
		Preloader
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloader").delay(400).fadeOut("slow");

	if($('.portfolios-area').length > 0 ) {
		var containerEl = document.querySelector('.portfolios-area');
		var mixer = mixitup(containerEl);
	}

});


(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});



	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*----------------------
		Portfolio layout
	------------------------*/
	var port_fi =  $('.portfolios-area .first-item'),
		port_si =  $('.portfolios-area .second-item'),
		port_intro_h =  $('.portfolio-intro').innerHeight();

	if ($(window).width() > 991) {
		port_fi.appendTo('.portfolio-intro');
		port_si.find('.portfolio-item').height(port_intro_h + 601);
	}

	$('.portfolio-item.pi-style2').each(function() {
		var pi_width = $(this).width();
		$(this).height(pi_width + 50);
	});



	/*------------------
		Popup
	
	$('.portfolio-item').magnificPopup({
		type: 'image',
		mainClass: 'img-popup-warp',
		removalDelay: 400,
	});
--------------------*/

	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


if($().circleProgress){

	//Set progress circle 1
	$("#progress1").circleProgress({
		value: 0.75,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 2
	$("#progress2").circleProgress({
		value: 0.83,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 3
	$("#progress3").circleProgress({
		value: 0.25,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
	//Set progress circle 4
	$("#progress4").circleProgress({
		value: 0.95,
		size: 146,
		thickness: 3,
		fill: "#979797",
		emptyFill: "rgba(0, 0, 0, 0)"
	});
}

})(jQuery);


// The array for your cursors
var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor5.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);


var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor2');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor3');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor4');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor5');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor6');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);


var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor7');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor8');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor9');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor10');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);

var arrayOfCursors = ["url(img/cursor2.png), auto", "url(img/cursor3.png), auto", "url(img/cursor4.png), auto", "url(img/cursor4.png), auto", "url(img/cursor6.png), auto"];

// Returns a random element from the provided array
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 

// Selects the element
var el = document.getElementById('randomCursor11');

// Changes the cursor
el.style.cursor = random(arrayOfCursors);