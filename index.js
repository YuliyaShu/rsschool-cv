//burger-menu

const burger = document.querySelector('.nav-header-burger');
const burgerUl = document.querySelector('ul');
const navBurgerMenu = document.querySelector('.nav-burger-menu');
const navBurgerMenuContainer = document.querySelector('.nav-burger-menu-container');
const navBurgerMenuList = document.querySelector('.nav-burger-menu-list');
const navBurgerMenuLink1 = document.querySelector('.nav-burger-menu-link-1');
const navBurgerMenuLink2 = document.querySelector('.nav-burger-menu-link-2');
const navBurgerMenuLink3 = document.querySelector('.nav-burger-menu-link-3');
const navBurgerMenuLink4 = document.querySelector('.nav-burger-menu-link-4');
const navBurgerMenuLink5 = document.querySelector('.nav-burger-menu-link-5');
const navBurgerMenuLink6 = document.querySelector('.nav-burger-menu-link-6');
const navBurgerMenuLink7 = document.querySelector('.nav-burger-menu-link-7');
const navBurgerMenuLink8 = document.querySelector('.nav-burger-menu-link-8');
const navBurgerMenuLink9 = document.querySelector('.nav-burger-menu-link-9');
const logoBurger = document.querySelector('.logo-burger');
const bodyBurger = document.querySelector('.body-burger');
const headerMain = document.querySelector('.header-main');
const hrBurger = document.querySelectorAll('.hr-burger');
const htmlBurger = document.querySelector('html');

function toggleMenu() {
  htmlBurger.classList.toggle('open');
  bodyBurger.classList.toggle('overlay');
  headerMain.classList.toggle('header-main-burger');
  for (let i =0; i< hrBurger.length; i++) {
    hrBurger[i].classList.toggle('open');
  };
  logoBurger.classList.toggle('open');
  burgerUl.classList.toggle('open');
  navBurgerMenu.classList.toggle('open');
  navBurgerMenuContainer.classList.toggle('open');
  navBurgerMenuList.classList.toggle('open');
  navBurgerMenuLink1.classList.toggle('open');
  navBurgerMenuLink2.classList.toggle('open');
  navBurgerMenuLink3.classList.toggle('open');
  navBurgerMenuLink4.classList.toggle('open');
  navBurgerMenuLink5.classList.toggle('open');
  navBurgerMenuLink6.classList.toggle('open');
  navBurgerMenuLink7.classList.toggle('open');
  navBurgerMenuLink8.classList.toggle('open');
  navBurgerMenuLink9.classList.toggle('open');
  burger.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);
navBurgerMenuLink1.addEventListener('click', toggleMenu);
navBurgerMenuLink2.addEventListener('click', toggleMenu);
navBurgerMenuLink3.addEventListener('click', toggleMenu);
navBurgerMenuLink4.addEventListener('click', toggleMenu);
navBurgerMenuLink5.addEventListener('click', toggleMenu);
navBurgerMenuLink6.addEventListener('click', toggleMenu);
navBurgerMenuLink7.addEventListener('click', toggleMenu);
navBurgerMenuLink8.addEventListener('click', toggleMenu);
navBurgerMenuLink9.addEventListener('click', toggleMenu);
bodyBurger.addEventListener('click', toggleMenu);

