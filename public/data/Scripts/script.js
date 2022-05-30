const toggle1 = document.getElementById('toggle-theme');
toggle1.onclick = function() {togglee()};
function togglee(){  
if (toggle1.innerHTML === 'toggle_on'){
  toggle1.innerHTML = 'toggle_off';
  toggle1.style.fontVariationSettings = "'FILL' 0"
} else if (toggle1.innerHTML = 'toggle_on'){
  toggle1.innerHTML = 'toggle_on';
  toggle1.style.fontVariationSettings = "'FILL' 1"
} else{
  toggle1.innerHTML = 'error';
  toggle1.style.fontVariationSettings = "'FILL' 1"
}};

const toggle2 = document.getElementById('toggle-grad');
toggle2.onclick = function() {togglee2()};
function togglee2(){  
if (toggle2.innerHTML === 'toggle_on'){
  toggle2.innerHTML = 'toggle_off';
  toggle2.style.fontVariationSettings = "'FILL' 0"
} else if (toggle2.innerHTML = 'toggle_on'){
  toggle2.innerHTML = 'toggle_on';
  toggle2.style.fontVariationSettings = "'FILL' 1"
} else{
  toggle2.innerHTML = 'error';
  toggle2.style.fontVariationSettings = "'FILL' 1"
}};

var changeclrbtn = document.getElementById('main-colorbtn');

changeclrbtn.onclick = function() {maincolorset()};
function maincolorset() {
  var maincolore = document.getElementById('main-colorbox').value;
  document.documentElement.style.setProperty('--main-color', maincolore );
  var currentTheme = localStorage.getItem("color-theme");
if (currentTheme != maincolore) {
  document.documentElement.style.setProperty('--main-color', maincolore );
} else if (currentTheme == maincolore) {
  document.documentElement.style.setProperty('--main-color', '#499ae8' );
}
  localStorage.setItem("color-theme", maincolore);
}
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




