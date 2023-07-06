const drop_doun_header = document.querySelector(".drop_down_header");
const layout = document.querySelector(".layout-header__right")


window.addEventListener("scroll", callbackFunc);

function callbackFunc() {
  let y = window.pageYOffset;
  layout.style.top = `${y}px`;
  if (y > 150) {
    drop_doun_header.style.top = "0";
  } else {
    drop_doun_header.style.top = "-8rem";
  }
}

const burger_button = document.querySelector(".icon-burger");
const icon_close = document.querySelector(".icon-close");
const menu = document.querySelector('.layout-header__right')
console.log(burger_button);
burger_button.addEventListener('click', () => {
    menu.classList.toggle('menu');
    burger_button.style.display = "none";
    icon_close.style.display = "block";
})

icon_close.addEventListener('click', () => {
  menu.classList.toggle('menu')
  burger_button.style.display = "block";
  icon_close.style.display = "none";
})

const burger_button_dropdown = document.querySelector(".icon-burger-navbar");
const icon_close_dropdown = document.querySelector(".icon-close-navbar");


burger_button_dropdown.addEventListener('click', () => {
    menu.classList.toggle('menu')
    burger_button_dropdown.style.display = "none";
    icon_close_dropdown.style.display = "block";
})
icon_close_dropdown.addEventListener('click', () => {
  menu.classList.toggle('menu')
  burger_button_dropdown.style.display = "block";
  icon_close_dropdown.style.display = "none";
})