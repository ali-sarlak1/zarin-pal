const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
const showMoreMenu = document.querySelector("#show-more-menu");
const showProductMenu = document.querySelector("#show-product-menu");

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
window.addEventListener("scroll", function () {
  var e = document.getElementById("navBar"),
    n = window.pageYOffset;
  n && n > 40
    ? (e.classList.add("sticky"), (e.style.top = "0px"))
    : (e.classList.remove("sticky"), (e.style.top = 10 - n + "px"));
}),
  hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.classList.add("show-hamburger-menu");
  });

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu");
});

showMoreMenu.addEventListener("mouseenter", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.animation = "showUp 0.35s 1";
  ul.style.display = "block";
});

showMoreMenu.addEventListener("mouseleave", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.display = "none";
});

showProductMenu.addEventListener("mouseenter", function (e) {
  const div = e.target.childNodes[5];
  div.style.animation = "showUp 0.35s 1";
  div.style.display = "flex";
});

showProductMenu.addEventListener("mouseleave", function (e) {
  const div = e.target.childNodes[5];
  div.style.display = "none";
});
window.onload = function () {
  document.getElementById("close-item-popup").onclick = function () {
    this.parentNode.remove();
    return false;
  };
};
