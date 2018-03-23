var elem = document.querySelector('.parallax');
var instance = M.Parallax.init(elem, {});

var instance = M.Carousel.init(document.querySelector('.carousel'), {
  fullWidth: true,
  indicators: true,
  duration: 100,
  padding: 10,
  nowarp: true
});


// Scrolls to the top when the webpage is refreshed as i had some issues with that


// Animates the preloader spinning circle with a fade out as the Carousel wasnt loading on time
document.addEventListener("DOMContentLoaded", function(){
 $('.preloader-background').delay(1700).fadeOut('slow');
 
 $('.preloader-wrapper')
   .delay(1700)
   .fadeOut();
});


// Starts the carousel's movement of the photos
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6000);
}


// ALl the adjustments for a smooth scroll jquery plugin that was needed for the parallax to look good.
$("html").easeScroll({
    frameRate: 30,
    animationTime: 500,
    stepSize: 40,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 10,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: true,
    dist: 0
});

// Makes the Carousel button to move right one picture work
$('.moveNextCarousel').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.carousel').carousel('next');
});

// Makes the Carousel button to move left one picture work
$('.movePrevCarousel').click(function(e){
  e.preventDefault();
  e.stopPropagation();
  $('.carousel').carousel('prev');
});
