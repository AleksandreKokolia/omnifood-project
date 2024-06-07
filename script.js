const menuEl = document.querySelector(".btn_mobile_tag");
console.log(menuEl);

const headerEl = document.querySelector(".header ");
console.log(headerEl);

menuEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav_open");
});

//_______________________________________________________//
