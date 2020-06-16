// 'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.main-header__burger');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });


'use strict';

// open burger menu

var navButton = document.querySelector(".main-header__button");
var menu = document.querySelector(".main-nav");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 1023) {
  console.log('<1024');
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
});
