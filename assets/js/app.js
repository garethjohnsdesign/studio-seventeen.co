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


var triangleAnimation = anime({
  targets: '.icon-triangle',
  translateX: 250,
  translatey: -10,
  rotate: 90,
  duration: 50000,
  loop: true,
  easing: 'linear',
  direction: 'alternate'
});

var moonAnimation = anime({
  targets: '.icon-moon',
  translateX: -50,
  translatey: -10,
  rotate: 90,
  duration: 50000,
  loop: true,
  easing: 'linear',
  direction: 'alternate'
});

var diagramAnimation = anime({
  targets: '.icon-diagram',
  rotate: 360,
  duration: 50000,
  loop: true,
  easing: 'linear',
});

var rectangleAnimation = anime({
  targets: '.icon-rectangle',
  translateX: 250,
  translatey: -10,
  rotate: 90,
  duration: 50000,
  loop: true,
  easing: 'linear',
});

var circleAnimation = anime({
  targets: '.icon-circle',
  translateX: -250,
  translatey: -10,
  duration: 50000,
  loop: true,
  easing: 'linear',
});


var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    round: true,
    vertical: true,
    horizontal: false
  });