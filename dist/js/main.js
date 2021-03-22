const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menunav = document.querySelector('.menu-nav');
const navitems = document.querySelectorAll('.menu-nav-item');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menunav.classList.add('open');
    navitems.forEach(item => item.classList.add('open'));
    showMenu = true;
  }else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menunav.classList.remove('open');
    navitems.forEach(item => item.classList.remove('open'));
    showMenu = false;
  }
}
