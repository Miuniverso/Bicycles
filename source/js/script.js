'use strict';

// open burger menu

var navButton = document.querySelector(".main-header__button");
var menu = document.querySelector(".main-nav");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var body = document.querySelector('body');
var logo = document.querySelector('.intro__logo');
var form = document.querySelector('.intro__form');
var menuLinks = document.querySelectorAll(".main-nav__link");
var facts = document.querySelector(".facts");
var intro = document.querySelector(".intro");
var introWrapper = document.querySelector(".intro__wrapper");

menu.classList.remove("main-nav--no-js");
logo.classList.remove("intro__logo--no-js");
form.classList.remove("intro__form--no-js");
facts.classList.remove("facts--no-js");
intro.classList.remove("intro--no-js");
introWrapper.classList.remove("intro__wrapper--no-js");

if (viewportWidth < 1023) {
  menu.classList.add("visually-hidden");
  navButton.classList.remove('visually-hidden');
} else {
  menu.classList.remove("visually-hidden");
  navButton.classList.add('visually-hidden');
}

window.addEventListener("resize", function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth > 1023) {
    menu.classList.remove("visually-hidden");
    navButton.classList.add('visually-hidden');
  } else {
    menu.classList.add("visually-hidden");
    navButton.classList.remove('visually-hidden');
  }
}, false);

navButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle('visually-hidden');
  navButton.classList.toggle('main-header__button--active');
  body.classList.toggle('no-scroll');
});

// work hidden menu

for (var i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function() {
    menu.classList.toggle('visually-hidden');
    navButton.classList.toggle('main-header__button--active');
    body.classList.toggle('no-scroll');
  })
}
