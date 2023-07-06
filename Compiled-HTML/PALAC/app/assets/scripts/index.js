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
const menu = document.querySelector('.layout-header__right')
console.log(burger_button);
burger_button.addEventListener('click', () => {
    menu.classList.toggle('menu');
    if(menu.classList.contains("menu")){
        layout.style.top = '3.3rem';
    } else {
    layout.style.top = '0';}
})

const burger_button_dropdown = document.querySelector(".icon-burger-navbar");


burger_button_dropdown.addEventListener('click', () => {
    menu.classList.toggle('menu')
    // let y = window.pageYOffset;
    // layout.style.top = `${y}px`;
    // if (menu.classList.contains("menu")) {
    //     drop_doun_header.style.top = "0";
    //   } else {
    //     drop_doun_header.style.top = "-8rem";
    // }
})