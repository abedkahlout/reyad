'use strict';


function filterServices(id) {
  const moqawalat = document.getElementById('moqawalat');
  const commerce = document.getElementById('commerce');

  if (id === 'all') {
    moqawalat.style.display = 'flex';
    commerce.style.display = 'flex';
  } else {
    moqawalat.style.display = id === 'moqawalat' ? 'flex' : 'none';
    commerce.style.display = id === 'commerce' ? 'flex' : 'none';
  }
}


/**
* PRELOADER
*/

 // Hide the preloader when the page finishes loading
 window.addEventListener('load', function() {
    var preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
  });

  // AOS library
  AOS.init();


// Swiper JS Carousel 
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


       // Add 'scrolled' class to navbar when scrolling
       window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrolled > 0) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });