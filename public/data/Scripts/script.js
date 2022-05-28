function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0";
}

function framer() {
  document.querySelector(".present").style.height = "90vh";
  document.querySelector("#present-butt").style.display = "inline-block";
  document.querySelector(".click-it").style.display = "none";
}

function framercloser() {
  document.querySelector(".present").style.height = "0vh";
  document.querySelector("#present-butt").style.display = "none";
  document.querySelector(".click-it").style.display = "block";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dotty");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";
}

import Highway from '../../node_modules/@dogstudio/highway';
import Fade from'fade.js';
const H = new Highway.Core({
    transitions:{
        default:Fade
   }
});

const links=document.querySelectorAll('topnav a');
// Listen to the`NAVIGATE_IN` event
H.on('NAVIGATE_IN',({to, location})=>{
                   link=>{links.forEach(
        // Remove the active class
        link.classList.remove('active');
        // Add the active class
        if(link.href === location.href){
            link.classList.add('active');
   });
});


