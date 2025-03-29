AOS.init();

AOS.init({
  once: false, // 👈 this allows animations to repeat
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-slider").mount();
});

var front = document.getElementById("front");

front.addEventListener("mouseover", function () {
  front.src = "/selfies/back2back.png";
});

front.addEventListener("mouseleave", function () {
  front.src = "/selfies/1.png";
});

const pictures = document.querySelectorAll(".about-content-james img");

pictures.forEach(function (picture) {
  picture.addEventListener("click", function () {
    window.location.href = "about.html";
  });
});

const about = document.querySelector(".about-heading button");

about.addEventListener("click", function () {
  window.location.href = "about.html";
});

function galleryLocator() {
  window.location.href = "gallery.html";
}

const gallery = document.querySelector(".gallery-heading button");
gallery.addEventListener("click", galleryLocator);

const masterpieces = document.querySelectorAll(".splide__slide img");
masterpieces.forEach(function (masterpiece) {
  masterpiece.addEventListener("click", galleryLocator);
});

const contact = document.querySelector("#contax button");
contact.addEventListener("click", function () {
  window.location.href = "contact.html";
});


var options = {
  "animate": true,
  "patternWidth": 220.72,
  "patternHeight": 166.69,
  "grainOpacity": 0.13,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
};

grained("#grained-bg", options);