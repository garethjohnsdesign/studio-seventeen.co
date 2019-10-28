// 1. Imports
// ----------

import $ from "jquery";
import Foundation from 'foundation-sites';
import AOS from 'aos';

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

// 3. Background Image Change on Hover
// -----------------------------------

$(".link").hover(function() {
    var color = $(this).data('color');
    var image = $(this).data('image');

    $('body').css('background-color', color);
    $('body').css('background-image', "url('" + image + "')");
}, function() {
    $('body').css('background-color', "");
    $('body').css('background-image', "");
});


// 4. Viewport Height Fix
// ----------------------

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});