var menuBtn = document.querySelector('.menu-btn');
var hamburger = document.querySelector('.menu-btn__burger');
var bars = document.querySelector('.nav');
var menuNav = document.querySelector('.menu-nav');
var navItems = document.querySelectorAll('.menu-nav__item');

var seeList = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!seeList) {
    menuBtn.classList.add('open');
    hamburger.classList.add('open');
    bars.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));
    seeList = true;
  } else {
    menuBtn.classList.remove('open');
    hamburger.classList.remove('open');
    bars.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));
    seeList = false;
  }
}
