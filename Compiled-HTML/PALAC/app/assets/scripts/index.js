const drop_doun_header = document.querySelector(".drop_down_header");

console.log(drop_doun_header);

window.addEventListener("scroll", callbackFunc);

function callbackFunc() {
  var y = window.pageYOffset;
  if (y > 150) {
    drop_doun_header.style.top = "0";
  } else {
    drop_doun_header.style.top = "-8rem";
  }
}
