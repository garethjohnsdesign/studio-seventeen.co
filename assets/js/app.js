$(document).foundation();

$('body').removeClass('fade-out');

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   easing: 'ease-in-out-quart', 
   duration: 600,
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});


$("a.link").hover(function() {
	$this = $(this);
  $("body").css("background-image", "url(" + $(this).data("bg") + ")");
	}, function() {
	$("body").css("background-image", '');
});