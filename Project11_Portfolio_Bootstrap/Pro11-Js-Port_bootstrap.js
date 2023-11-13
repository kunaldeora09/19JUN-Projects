// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarGray");
  } else {
    header.classList.remove("navbarGray");
  }
};
